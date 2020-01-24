var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (Franz) => {
  if (document.querySelectorAll('.promotedlink').length > 0) {
    document.querySelectorAll('.promotedlink').forEach((sponsoredLink) => {
      sponsoredLink.parentElement.parentElement.style.display = 'none'
    })
  }

  // Use CSS to hide Google Ads
  Franz.injectCSS(_path.default.join(__dirname, 'service.css'))
}
