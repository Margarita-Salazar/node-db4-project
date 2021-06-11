const ingredients = [
    {ingredient_name: 'Green Egg'},
    {ingredient_name: 'Oil'},
    {ingredient_name: 'Salt'},
    {ingredient_name: 'Geen Ham'},
    {ingredient_name: 'Sam-I-am'},
]

exports.seed = function(knex) {
    return knex('ingredients').insert(ingredients)
}