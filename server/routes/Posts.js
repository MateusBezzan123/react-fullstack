const expess = require('express')
const router = expess.Router()
const { Posts } = require('../models')


router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
})


router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

router.post("/", async (req, res) => {
    const post = req.body
    await Posts.create(post)
    res.json(post)
})


module.exports = router