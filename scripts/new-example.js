#!/usr/bin/env node
'use strict';

const fetchFeed = require('./lib/fetch-feed');

(async () => {
	await fetchFeed('examples', process.argv[2]);
})();
