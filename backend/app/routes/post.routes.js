
module.exports = (app) => {
    const router = require('express').Router()
    const { auth } = require('../middlewares/auth')
    const posts = require('../controllers/post.controller')
    const users = require('../controllers/user.controller')

    router.get('/posts', posts.findAll)
    router.post('/posts', posts.create)
    router.get('/posts/:id', posts.findOne)
    router.put('/posts/:id', auth, posts.update)
    router.delete('/posts/:id', auth, posts.delete)

    router.get('/users',auth,users.findAll)
    router.post('/register',users.register)
    router.post('/login',users.login)
    router.delete('/user/:id', auth, users.deleteUser)

    app.use('/api', router)
}