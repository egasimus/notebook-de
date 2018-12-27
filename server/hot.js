try {
  const DotHot = require('dothot')
  module.exports = DotHot(process) //.parents
  module.exports.add(module.filename, module.parent)
} catch (e) {
  console.debug('Hot reloading disabled')
}
