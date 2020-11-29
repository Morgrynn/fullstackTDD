import { expect } from 'chai';
import MessageApp from './app.js';

describe('app', function () {
  let testApp;

  beforeEach(() => {
    testApp = new MessageApp();
    testApp.post('hello there!');
  });

  it('app has messages', function () {
    expect(testApp.messages).to.be.an('array');
  });

  it('app creates message (post)', function () {
    testApp.post('hello there!');
    expect(testApp.messages.length).to.equal(2);
  });

  it('message has content, date, and id', function () {
    expect(testApp.messages[0].content).to.equal('hello there!');
    expect(testApp.messages[0].date).not.to.equal(undefined);
    expect(testApp.messages[0].id).to.equal(0);
  });

  it('app reads (get)', function () {
    expect(testApp.get(0).content).to.equal('hello there!');
  });

  it('app updates (update)', function () {
    testApp.update(0, 'General Kenobi');
    expect(testApp.get(0).content).to.equal('General Kenobi');
  });

  it('app deletes (delete)', function () {
    testApp.delete(0);
    expect(testApp.messages.length).to.equal(0);
  });
});
