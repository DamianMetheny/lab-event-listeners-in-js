const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');


const htmlPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const dom = new JSDOM(html);
const document = dom.window.document;

global.document = document;
global.window = dom.window;
global.navigator = { userAgent: 'node.js' };

module.exports = { document, dom };