describe('database.queries', function(){
  describe('getEvents', function(){
    it('return all events', function(){
      return database.queries.getEvents().then(events => {
        expect(events).to.be.an('array')
      })
    })
  })
})
