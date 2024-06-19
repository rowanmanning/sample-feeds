#!/usr/bin/env node
'use strict';

const fetchFeed = require('./lib/fetch-feed');

(async () => {
	await fetchFeed('real-world', process.argv[2]);
})();
