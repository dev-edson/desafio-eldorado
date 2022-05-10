const { createResponseContent, createResponseErrors } = require('../../src/utils/responseBuilder')

describe('Create response API', () => {

  it('Create a response with errors (not array)', () => {
    const MESSAGE_ERROR = 'Errors dont array'

    expect(() => createResponseErrors({ message: 'test' })).toThrow(MESSAGE_ERROR)
  })
})