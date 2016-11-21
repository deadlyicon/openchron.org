import percentageOfRange from '../../browser/util/percentageOfRange'

describe('percentageOfRange', function(){
  it('it should work', function(){
    expect(percentageOfRange(100, 300, 200)).to.eql(50)
    expect(percentageOfRange(0, 10, 5)).to.eql(50)
    expect(percentageOfRange(0, 10, 1)).to.eql(10)
    expect(percentageOfRange(0, 10, 1.5)).to.eql(15)
  })
})
