'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs/promises');
const path = require('node:path');

module.exports = async function fetchFeed(type, url) {
	// Create
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`URL responded with a ${response.status} status code`);
	}
	const xml = await response.text();
	const directoryName = crypto.createHash('md5').update(url).digest('hex');
	const pagePath = path.resolve(__dirname, '..', '..', 'content', type, directoryName);

	// Create the feed directory
	await fs.mkdir(pagePath, { recursive: true });
	await fs.writeFile(path.join(pagePath, 'feed.xml'), xml);
	await fs.writeFile(
		path.join(pagePath, 'index.md'),
		`
		---
		title: "${url}"
		hash: "${directoryName}"
		original: "${url}"
		date: "${new Date().toISOString().split('T').shift()}"
		feedType: "Unknown"
		---
	`
			.replace(/\t+/g, '')
			.trim()
	);
};
