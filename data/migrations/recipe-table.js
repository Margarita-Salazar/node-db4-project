exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.text('recipe_name').unique().notNullable()
            table.date('created_at').defaultTo(new Date())
        })
        .createTable('ingredients', table=>{
            table.increments('ingredient_id')
            table.text('ingredient_name').notNullable()
        })
        .createTable('steps', table=>{
            table.increments('step_id')
            table.integer('step_number').notNullable()
            table.text('step_instructions').notNullable()
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE') 
        })
        .createTable('steps_ingredients', table=>{
            table.increments('step_ingredient_id')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onUpdate('CASCADE')
                .onDelete('CASCADE') 
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            table.decimal('quantity') 
        })
  }
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

  }