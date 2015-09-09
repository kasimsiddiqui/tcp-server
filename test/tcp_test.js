'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var fs = require('fs');
var oldDir;

chai.use(chaiHttp);

require('../server');

describe('server test', function() {
    before(function(done){
      oldDir = fs.readdirSync(__dirname + '/../logs');
      chai.request('localhost:3000')
      .post('/greet')
      .send({name: 'Kasim'})
      .end(function(err, res){
      done();
      });
    });
    it('should generate a new file', function() {
        var newDir = fs.readdirSync(__dirname + '/../logs');
        expect(oldDir).to.not.be.eql(newDir);
    });
});
