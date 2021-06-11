const steps = [
    { 
        recipe_id: 1, 
        step_number: 1, 
        step_instructions:'Put a large saucepan on medium heat'
    },
    {
        recipe_id: 1, 
        step_number: 1, 
        step_instructions:'Add oil to the saucepan'
    },
    {
        recipe_id: 1, 
        step_number: 1, 
        step_instructions:'Crack the eggs, and add to pan. Cook for 5 min'
    },
    {   
        recipe_id: 1, 
        step_number: 1, 
        step_instructions:'Plate the eggs with the Ham'
    },
    {   
        recipe_id: 1, 
        step_number: 1, 
        step_instructions:'Sam-I-am feeds it to the Stranger'
    },
]

exports.seed = function(knex) {
    return knex('steps').insert(steps)
}