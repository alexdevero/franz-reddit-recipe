var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Franz) => {
  // Use CSS to hide Google Ads
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'))
}
