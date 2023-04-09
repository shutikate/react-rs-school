import { vi } from 'vitest';
import { getEvents } from './events';

global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);
const mockUrl = 'https://react-json-api.vercel.app/events?q=';

describe('Test getEvents', () => {
  it('Should call fetch with empty search', () => {
    getEvents('');
    expect(global.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('Should call fetch with provided search', () => {
    getEvents('test');
    expect(global.fetch).toHaveBeenCalledWith(`${mockUrl}test`);
  });
});
