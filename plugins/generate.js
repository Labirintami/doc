#!/usr/bin/ev node
const http = require("http");
const path = require("path");
const fs = require("fs");

const getFiles = (dir, files_) => {
	files_ = files_ || [];
	const files = fs.readdirSync(dir);
	for (const i in files){
		const name = dir + "/" + files[i];
		if (fs.statSync(name).isDirectory()){
			getFiles(name, files_);
		} else if (files[i].indexOf(".md") !== -1 || files[i].indexOf(".mdx") !== -1 || files[i].indexOf(".") === -1) {
			files_.push(name);
		}
	}
	return files_;
};

console.log(getFiles("../docs/"));

// const host = "cdn.dhtmlx.com";
//
//
//
// const getFileData = path => {
// 	return new Promise((resolve, reject) => {
// 		const request = http.request({ host, path }, function (res) {
// 			let data = '';
//
// 			res.on("data", function (chunk) {
// 				data += chunk;
// 			});
//
// 			res.on("end", function () {
// 				resolve(data);
// 			});
// 		});
//
// 		request.on("error", function (e) {
// 			reject(e.message);
// 		});
//
// 		request.end();
// 	})
// }
//
// getFileData("/suite/pro/edge/types/ts-grid/index.d.ts").then(data => {
// 	console.log(data);
// });
