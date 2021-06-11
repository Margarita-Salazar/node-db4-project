const recipes = [
    { recipe_name: 'Green Eggs and Ham' },
  ]
  
exports.seed = function(knex) {
        return knex('recipes').insert(recipes)
  }