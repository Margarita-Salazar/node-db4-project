const recipes = [
    { recipe_name: 'Bangers and Mash' },
    { recipe_name: 'Fish and Chips' },
  ]
  
exports.seed = function(knex) {
    return knex('recipes').truncate()
      .then(function () {
        return knex('recipes').insert(recipes)
      })
  }