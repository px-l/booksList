const request = require('supertest');
const expect = require('chai').expect;

describe('node api test', ()=>{
    it('获取图书列表', function(done) {
        request('http://localhost:3000')
        .get('/api/getDataList')
        .expect(200)
        .end((err, res)=>{
            console.log(res.body);
            expect(res.body.length).equal(2);
            done()
        })
    })
})