import request  from 'supertest';
import 'dotenv/config';

describe('Trello API', () => {
    it('should retrieve all boards associated with the member', (done) => {
        request('https://api.trello.com')
            .get(`/1/members/me/boards?key=${apiKey}&token=${apiToken}`)
            .expect(200, done)
    });

    it('should create a board', (done) => {
        request('https://api.trello.com')
            .post(`/1/boards/?name=pupupu&key=${apiKey}&token=${apiToken}`) // get board id here
            .expect(200, done)
    });

    it('update a board name', (done) => {
        request('https://api.trello.com')
            .put(`/1/boards/661e8c414527a7741a21f5f1?key=${apiKey}&token=${apiToken}`)
            .send({ name: 'update' })
            .expect(200, done)
    });

    it('should delete a board', (done) => {
        request('https://api.trello.com')
            .del(`/1/boards/661e917b4cd08c454ea372cf?key=${apiKey}&token=${apiToken}`) // take board id from previous test
            .expect(200, done)
    });

});
