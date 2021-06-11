const steps_ingredients = [
    { 
        step_id: 2,
        ingredient_id: 2,
        quantity: 2.00,
    },
    {
        step_id: 3,
        ingredient_id: 1,
        quantity: 0.014, 
    },
    {
        step_id: 4,
        ingredient_id: 1,
        quantity: 2.00, 
    },
    {
        step_id: 4,
        ingredient_id: 4,
        quantity: 1, 
    },
    {   
        step_id: 5,
        ingredient_id: 5,
        quantity: 1.00, 
    }
]

exports.seed = function(knex) {
    return knex('steps_ingredients').insert(steps_ingredients)
}