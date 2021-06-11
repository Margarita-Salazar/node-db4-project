const router = require('express').Router()

const Recipe = require('./recipe-model')

router.get('/:id', async (req, res)=>{
    const recipe = await Recipe.getRecipeById(req.params.id)
    res.json(recipe)
})

module.exports = router
