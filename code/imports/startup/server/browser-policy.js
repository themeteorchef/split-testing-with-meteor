import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.content.allowOriginForAll('*.ssl-images-amazon.com');
BrowserPolicy.content.allowFontDataUrl();
BrowserPolicy.content.allowOriginForAll('*.astronomer.io');
BrowserPolicy.content.allowOriginForAll('*.woopra.com');
