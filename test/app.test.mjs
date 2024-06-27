import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.mjs';

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
