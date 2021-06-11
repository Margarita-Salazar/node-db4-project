const ingredients = [
    {ingredient_name: 'Potato'},
    {ingredient_name: 'Fish'},
    {ingredient_name: 'Oil'},
    {ingredient_name: 'Salt'},
    {ingredient_name: 'Sausage'},
]

exports.seed = function(knex) {
    return knex('ingredients').insert(ingredients)
}