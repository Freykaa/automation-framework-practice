import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.TRELLO_API_KEY;
const apiToken = process.env.TRELLO_API_TOKEN;

describe('Trello API', () => {
    let boardId;

    it('should retrieve all boards associated with the member', (done) => {
        request('https://api.trello.com')
            .get(`/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
            .expect('Content-Type', /json/)
            .expect(200, done)
    });


    it('should create a board', (done) => {
        request('https://api.trello.com')
            .post(`/1/boards/?name=pupupu&key=${apiKey}&token=${apiToken}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                boardId = response.body.id;
                done();
            })
            .catch(error => done(error));
    });

    it('update a board name', (done) => {
        request('https://api.trello.com')
            .put(`/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`)
            .send({ name: 'update' })
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('should delete a board', (done) => {
        request('https://api.trello.com')
            .del(`/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`)
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
