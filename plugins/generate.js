#!/usr/bin/ev node
const http = require("http");
const path = require("path");
const fs = require("fs");

const host = "cdn.dhtmlx.com";

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

const getFiles = (dir, files_) => {
	files_ = files_ || [];
	const files = fs.readdirSync(dir);
	for (const i in files) {
		const currentPath = dir + "/" + files[i];
		if (fs.statSync(currentPath).isDirectory()) {
			getFiles(currentPath, files_);
		} else if ((files[i].includes(".md") || files[i].includes(".mdx") || !files[i].includes(".")) && currentPath.includes("/api/")) {
			const regex = /(.*)\_(.*)\_(.*)\./g.exec(files[i]);
			if (regex && regex.length) {
				const widget = regex[1].toLowerCase();
				const name = regex[2].toLowerCase();
				const type = regex[3].toLowerCase();
				files_.push({ filePath: currentPath, widget, name, type });
			}
		}
	}
	return files_;
};

getFiles("../docs/").forEach(file => {
	const remoteFilePath = `/suite/pro/edge/types/ts-${file.widget}/sources/types.d.ts`;
	getRemoteFileData(remoteFilePath).then(data => {
		if (data.toLowerCase().includes(file.name.toLowerCase())) {
			let signature;
			switch (file.type) {
				case "config":
					const regex = new RegExp(`^\\s+${file.name}(:|\\?:).*;$`, "mi");
					const match = data.match(regex);
					if (match && match.length) signature = match[0].trim();
					break;
				case "method":
					break;
				case "event":
					break;
			}
			if (signature) {
				const data = fs.readFileSync(file.filePath, 'utf-8');
				const newValue = data.includes("@signature") ?
					data.replace(/@signature:.*/g, `@signature: ${signature}`) :
					data.replace(/@short:.*/g, str => `${str}\n\n@signature: ${signature}`);
				fs.writeFileSync(file.filePath, newValue, 'utf-8');
			}
		}
	}).catch(console.warn);
});
