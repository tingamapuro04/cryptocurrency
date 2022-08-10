import { getCryptoAsync } from '../redux/crypto';

it('Check if a promise is fulfilled', () => {
  expect(getCryptoAsync()).toEqual(expect.any(Function));
});
