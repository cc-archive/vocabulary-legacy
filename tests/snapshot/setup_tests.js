const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

jest.setTimeout(30000) // The processes can be incredibly slow in containers
