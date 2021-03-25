#!/usr/bin/ev node
const http = require("http");
const path = require("path");
const fs = require("fs");

const host = "cdn.dhtmlx.com";

const buildFileObject = (currentPath, fileName) => {
	const pathRegex = /docs\W+(.*)\/api\/(.*)\./g.exec(currentPath);
	if (pathRegex && pathRegex.length) {
		let url = pathRegex[1].toLowerCase();
		switch (url) {
			case "ajax":
			case "data_collection":
			case "data_proxy":
			case "tree_collection":
				url = "data/sources/types.d.ts";
				break;
			case "css_manager":
				url = "common/CssManager.d.ts";
				break;
			default:
				url += "/sources/types.d.ts";
				break;
		}
		const regex = /(.*)\_(.*)\_(.*)\./g.exec(fileName);
		if (regex && regex.length) {
			const name = regex[2].toLowerCase();
			const type = regex[3].toLowerCase();
			return { filePath: currentPath, url, name, type };
		}
	}
};

const getFiles = (dir, files_) => {
	files_ = files_ || [];
	const files = fs.readdirSync(dir);
	for (const i in files) {
		const currentPath = dir + "/" + files[i];
		if (fs.statSync(currentPath).isDirectory()) {
			getFiles(currentPath, files_);
		} else if ((files[i].includes(".md") || files[i].includes(".mdx") || !files[i].includes(".")) && currentPath.includes("/api/")) {
			const fileObject = buildFileObject(currentPath, files[i]);
			fileObject && files_.push(fileObject);
		}
	}
	return files_;
};

const getRemoteFileData = path => {
	return new Promise((resolve, reject) => {
		const request = http.request({ host, path }, res => {
			let data = '';
			res.on("data", chunk => data += chunk);
			res.on("end", () => resolve(data));
		});

		request.on("error", e => reject(e.message));
		request.end();
	})
};

const getSignatureData = (fileData, signature, url) => {
	return signature
		? fileData.includes("@signature")
			? fileData.replace(/@signature:.*/g, `@signature: ${signature}`)
			: fileData.replace(/@short:.*/g, str => `${str}\n\n@signature: ${signature}`)
		: fileData.includes("@signature")
			? fileData.replace(/@signature:.*/g, `@signature: todo, not found [here](https://${host}/suite/pro/edge/types/ts-${url})`)
			: fileData.replace(/@short:.*/g, str => `${str}\n\n@signature: todo, not found [here](https://${host}/suite/pro/edge/types/ts-${url})`);
}

getFiles("../docs/").forEach(file => {
	getRemoteFileData(`/suite/pro/edge/types/ts-${file.url}`).then(data => {
		if (data.toLowerCase().includes(file.name.toLowerCase())) {
			let signature;
			let regex;
			switch (file.type) {
				case "config":
					regex = new RegExp(`^\\s+${file.name}(:|\\?:).*;$`, "mi");
					break;
				case "method":
					regex = new RegExp(`^\\s+(${file.name}(.*): .*);$`, "mi");
					break;
				case "event":
					regex = new RegExp(`^\\s+\\[.*Events\\.(${file.name})\\]: (.*;)$`, "mi");
					break;
			}

			const match = data.match(regex);
			if (match && match.length) {
				switch (file.type) {
					case "method":
					case "config":
						signature = match[0].trim();
						break;
					case "event":
						signature = `${match[1]}: ${match[2]}`.trim();
						break;
				}
			}

			const fileData = fs.readFileSync(file.filePath, 'utf-8');
			const newData = getSignatureData(fileData, signature, file.url);
			fs.writeFileSync(file.filePath, newData, 'utf-8');
		}
	});
});
