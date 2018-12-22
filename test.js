const spec = module.exports =
  { './wrapper/test': 'Wrapper'
  , './server/test':  'Server'
  , './client/test':  'Client' }

const { join } = require('path')

if (require.main === module)
  Object.keys(spec).forEach(test=>{
    const label = spec[test]
    const subspec = require(test)
    Object.keys(subspec).forEach(subtest=>{
      const sublabel = `${label} ${subspec[subtest]}`
      const impl = require(`./${join(test, subtest)}`)
      require('tape')(sublabel, impl) }) })
