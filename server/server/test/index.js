const spec = module.exports =

  { './test-listen'
    : 'listens on specified local port via ipv4'

  , './test-request'
    : 'responds to request to run a command with address'

  }

if (require.main === module)
  Object.keys(spec).forEach(test=>
    require('tape')(`Server ${spec[test]}`, require(test)))
