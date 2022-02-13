import { getIdFromUrl } from 'utils/getIdFromUrl'

test('getIdFromUrl', () => {
  const id = '123'
  const testUrl = `http://etst/test/testest/${id}/`

  expect(getIdFromUrl(testUrl)).toEqual(id)
})
