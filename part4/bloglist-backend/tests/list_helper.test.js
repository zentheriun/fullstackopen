const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://example.com',
      likes: 5,
      __v: 0
    }
  ]

  const listWithMultipleBlogs = [
    { title: 'Blog 1', author: 'Author 1', url: 'http://1.com', likes: 5 },
    { title: 'Blog 2', author: 'Author 2', url: 'http://2.com', likes: 10 },
    { title: 'Blog 3', author: 'Author 3', url: 'http://3.com', likes: 3 }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('when list has multiple blogs, equals the sum of likes', () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    assert.strictEqual(result, 18)
  })

  test('when list is empty, equals zero', () => {
    const result = listHelper.totalLikes([])
    assert.strictEqual(result, 0)
  })
})

describe('favorite blog', () => {
  const blogs = [
    { title: 'Blog 1', author: 'Author 1', url: 'http://1.com', likes: 5 },
    { title: 'Blog 2', author: 'Author 2', url: 'http://2.com', likes: 12 },
    { title: 'Blog 3', author: 'Author 3', url: 'http://3.com', likes: 3 }
  ]

  test('finds the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Blog 2',
      author: 'Author 2',
      likes: 12
    })
  })

  test('returns null for empty list', () => {
    const result = listHelper.favoriteBlog([])
    assert.strictEqual(result, null)
  })
})