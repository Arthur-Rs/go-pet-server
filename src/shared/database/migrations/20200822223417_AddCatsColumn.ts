import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.createTable('cats', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('age').notNullable()
    table.string('breed').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.dropTable('cats')
}
