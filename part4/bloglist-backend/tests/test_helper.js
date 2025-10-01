const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'HTML is easy',
    author: 'Test Author',
    url: 'http://example.com',
    likes: 5
  },
  {
    title: 'Browser can execute only JavaScript',
    author: 'Test Author 2',
    url: 'http://example.com',
    likes: 10
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ 
    title: 'willremovethissoon',
    url: 'http://example.com'
  })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb
}