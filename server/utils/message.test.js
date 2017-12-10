const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct messaeg object', () => {
    let from = 'Oindrila';
    let text = 'Some message';
    let message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location', () => {
    let from = 'Oindrila';
    let latitude = 15;
    let longitude = 19;
    let url = 'https://www.google.com/maps?q=15,19';

    var message = generateLocationMessage(from,latitude,longitude);



    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
