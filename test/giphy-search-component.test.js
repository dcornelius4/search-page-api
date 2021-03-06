import { searchToHash, readFromQuery } from '../src/query-functions.js';
const test = QUnit.test;

QUnit.module('Testing Search Component');

test('returns url hash that matches search when existing is empty', assert => {
    //Arrange
    const expected = 'limit=20&q=ryan+gosling';
    const existing = '';
    const searchTerm = 'ryan gosling';
    //Act
    const result = searchToHash(existing, searchTerm);
    //Assert
    assert.equal(result, expected);
});

test('returns url hash that matches search when existing has content', assert => {
    //Arrange
    const expected = 'limit=20&q=bill+cosby';
    const existing = 'limit=5&q=ryan+gosling';
    const searchTerm = 'bill cosby';
    //Act
    const result = searchToHash(existing, searchTerm);
    //Assert
    assert.equal(result, expected);
}); 



test('read search options from query', assert => {
    //Arrange
    const expected = {
        searchTerm: 'ryan gosling',
        limit: 5,
        offset: 0
    };
    const query = 'limit=5&q=ryan+gosling&offset=0';
    //Act
    const result = readFromQuery(query);
    //Assert
    assert.deepEqual(result, expected);
});