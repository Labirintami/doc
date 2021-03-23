#!/usr/bin/ev node
const http = require("http");
const path = require("path");
const fs = require("fs");

const host = "cdn.dhtmlx.com";

const buildFileObject = (currentPath, fileName) => {
	const pathRegex = /docs\W+(.*)\/api\/(.*)\./g.exec(currentPath);
	if (pathRegex && pathRegex.length) {
		let widget = pathRegex[1].toLowerCase();
		switch (widget) {
			case "ajax":
			case "data_collection":
			case "data_proxy":
			case "tree_collection":
				widget = "data/sources/types.d.ts";
				break;
			case "css_manager":
				widget = "common/CssManager.d.ts";
				break;
			default:
				widget += "/sources/types.d.ts";
				break;
		}
		const regex = /(.*)\_(.*)\_(.*)\./g.exec(fileName);
		if (regex && regex.length) {
			const name = regex[2].toLowerCase();
			const type = regex[3].toLowerCase();
			return { filePath: currentPath, widget, name, type };
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

getFiles("../docs/").forEach(file => {
	getRemoteFileData(`/suite/pro/edge/types/ts-${file.widget}`).then(data => {
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

			if (signature) {
				const data = fs.readFileSync(file.filePath, 'utf-8');
				const newValue = data.includes("@signature") ?
					data.replace(/@signature:.*/g, `@signature: ${signature}`) :
					data.replace(/@short:.*/g, str => `${str}\n\n@signature: ${signature}`);
				fs.writeFileSync(file.filePath, newValue, 'utf-8');
			}
		}
	}).catch(er => console.warn(er));
});
