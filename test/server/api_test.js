describe('api', function(){
  describe('get /api/events', function(){
    it('should render all events as json', function(){
      return request('get', '/api/events').then(response => {
        expect(response).to.have.status(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.length.above(0)
        response.body.forEach(event => {
          expect(event.id         ).to.be.a('number')
          expect(event.ownerId    ).to.be.a('number')
          expect(event.title      ).to.be.a('string')
          expect(event.startedAt  ).to.be.a('string')
          expect(event.completedAt).to.be.a('string')
        })
      })
    })
  })
})
