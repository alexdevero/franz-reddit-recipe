import path from 'path'

module.exports = (Franz) => {
  // Use CSS to hide Google Ads
  Franz.injectCSS(path.join(__dirname, 'service.css'))
}
