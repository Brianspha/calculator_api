const config = require('../config/config')

let chai = config.chai;
let chaiHttp = config.chaiHttp;
let should = chai.should();
const sinon =  config.sinon;

/**============================== unit tests  ==============================*/
beforeEach(function () {
    clock = sinon.useFakeTimers();
});

afterEach(function () {
    clock.restore();
 });

 chai.use(chaiHttp);

 describe('Health Check', () => {
    it('Should check if the service is working', (done) => {
        chai.request('http://localhost:5000')
            .post(`/healthcheck`)
            .send()
            .end((err, res) => {
                console.log('error: ', err)
                console.log('response: ', res.body)
                res.body.should.have.property('message').equal('Im alive :)');
                res.should.have.status(200);
                done();
            })
    })
})

describe('Love Calculator', () => {
    it('Should calculate MARY AND JAMES LOVE FOR EACH OTHER', (done) => {
        chai.request('http://0.0.0.0:5000')
            .post(`api/v1/calculator/amiloved`)
            .send({
                "lover1":"MARY",
                "lover2":"JAMES"
            })
            .end((err, res) => {
            console.log('error: ', err)
                console.log('response: ', res.body)
                res.body.should.have.property('final_score').equal('86%');
                res.should.have.status(200);
                done();
            })
    })
})