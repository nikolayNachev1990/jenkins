import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.mjs';

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(3000, () => {
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('should return Hello World', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World 20242!');
        done();
      });
  });
});