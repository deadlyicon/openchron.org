describe('database.commands', function(){
  describe('createEvent', function(){
    it('creates an event', function(){
      const event = {
        ownerId: 0,
        title: 'the big bang',
        startedAt: '0',
        completedAt: '0'
      }
      return database.commands.createEvent(event).then(([event]) => {
        expect(event).to.be.an('object')
        expect(event.id).to.be.a('number')
        expect(event.title).to.eql('the big bang')
      })
    })

    it('creates multiple event', function(){
      const event = [
        {
          ownerId: 0,
          title: 'the big bang',
          startedAt: '0',
          completedAt: '0',
        },
        {
          ownerId: 0,
          title: 'matter formed',
          startedAt: '1',
          completedAt: '1',
        },
      ]
      return database.commands.createEvent(event).then( events => {
        expect(events).to.be.an('array')
        expect(events).to.eql([
          {
            id: events[0].id,
            ownerId: 0,
            title: 'the big bang',
            startedAt: '0',
            completedAt: '0',
          },
          {
            id: events[1].id,
            ownerId: 0,
            title: 'matter formed',
            startedAt: '1',
            completedAt: '1',
          },
        ])
      })
    })
  })
})
