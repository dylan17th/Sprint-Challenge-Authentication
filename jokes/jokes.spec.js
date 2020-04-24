const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/dbConfig.js')

describe('testing the server.js',()=>{

    describe('testing the jokes enpoint', ()=>{
        it('expect 401 code without header', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res=>{
                expect(res.status).toBe(401)
            })
        })
        it('to have a body message for invalid token', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res=>{
                expect(res.body.you).toBe('you dont have the token to pass')
            })
        })
    })
})