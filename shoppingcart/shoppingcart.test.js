const {addItems} = require('./shoppingcart');

test('adds ham and cheese', () => {
  const result = addItems(['ham', 'cheese']);
  expect(result).toBe(36);
});

test('adds bread and milk', () => {
  const result = addItems(['bread', 'milk']);
  expect(result).toBe(9);
});
