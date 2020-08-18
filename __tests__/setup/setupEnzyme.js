const Adapter = require('enzyme-adapter-react-16');
const assert = require('assert');
const { configure } = require('enzyme');
const dotenv = require('dotenv');

const path = require('path');

const testPath = path.join('./', './', './', 'envConfig/test.env');
configure({ adapter: new Adapter() });
window.assert = assert;
dotenv.config({ path: testPath });
