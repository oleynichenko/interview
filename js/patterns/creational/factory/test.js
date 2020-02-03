const PersonFactory = require('./factory-person');

describe('factory', function() {
  test('exercise', function() {
    let pf = new PersonFactory();

    let p1 = pf.createPerson('Chris');
    expect(p1.name).toEqual('Chris');
    expect(p1.id).toEqual(0);

    let p2 = pf.createPerson('Sarah');
    expect(p2.id).toEqual(1);
  });
});