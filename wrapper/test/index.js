const spec = module.exports =

  { './test-bind'
    : 'binds on specified local port via ipv4'

  , './test-first'
    : 'launches child process on first connection and streams output'

  , './test-subsequent'
    : 'streams buffered output over subsequent connections' }

if (require.main === module)
  Object.keys(spec).forEach(test=>
    require('tape')(`Wrapper ${spec[test]}`, require(test)))
