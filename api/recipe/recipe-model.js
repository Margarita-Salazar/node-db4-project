const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const stepRows = await db('steps as s')
        .join('recipes as r', 's.recipe_id', 'r.recipe_id')
        .where('s.recipe_id', recipe_id)

    const ingredientsRows = await db('steps_ingredients as sti')
        .join('ingredients as i', 'sti.ingredient_id', 'i.ingredient_id')
        .select('sti.step_id', 'i.ingredient_id', 'i.ingredient_name', 'sti.quantity')
    
    const reformRecipe = {
        recipe_id: stepRows[0].recipe_id,
        recipe_name: stepRows[0].recipe_name,
        created_at: stepRows[0].created_at,
        steps: stepRows.map(step=>{
            return {
                step_id: step.step_id,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                ingredients: ingredientsRows.filter((ing)=>{
                    return ing.step_id === step.step_id
                })
            }
        })
    }

    return reformRecipe
}

module.exports = { getRecipeById }