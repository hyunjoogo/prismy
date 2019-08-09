import got from 'got'
import { methodSelector, prismy, res, testHandler } from '../../src'

describe('methodSelector', () => {
  it('selects method', async () => {
    const handler = prismy([methodSelector], method => {
      return res(method)
    })

    await testHandler(handler, async url => {
      const response = await got(url)

      expect(response).toMatchObject({
        statusCode: 200,
        body: 'GET'
      })
    })
  })
})