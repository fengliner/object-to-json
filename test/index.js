'use strict';

const object2json = require('../index');
const expect = require('chai').expect;

describe('object2json', function() {
  describe('#object2json', function() {
    it('should get a standard format json string', function() {
      var user = {
        id: 1,
        name: 'fengliner',
        color: {
          id: 1,
          name: 'fengliner'
        },
        font: ['crazy',3, {id: 1, name: 'fengliner'}]
      };
      let result = JSON.parse(object2json(user));
      expect(result.id).equal(1);
      expect(result.name).equal('fengliner');
      expect(result.color.id).equal(1);
      expect(result.color.name).equal('fengliner');
      expect(result.font[0]).equal('crazy');
      expect(result.font[1]).equal(3);
      expect(result.font[2].id).equal(1);
      expect(result.font[2].name).equal('fengliner');
    })
  });
});
