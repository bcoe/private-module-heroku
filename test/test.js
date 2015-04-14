var should = require('chai').should()

describe('private modules', function() {
  it('should require a private module', function() {
    require('@bcoe/awesomeify').message.should.equal('hello world how are you!')
  })
})
