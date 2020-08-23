import { Injectable } from '@nestjs/common'
import Cat from '../entities/cat.entity'
import knex from '../../../shared/database'
import ICreateCatDTO from '../dtos/create_cats.dto'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create (cat: ICreateCatDTO): Promise<Cat> {
    return knex.insert(this.cats).into('cats').returning<Cat>('*')
  }

  // async findByid (): Promise<Cat[]> {
  //   return this.cats
  // }

  // async findAll (): Promise<Cat[]> {
  //   // return knex<Cat>('cats').select<Cat[]>('*')
  // }

  // async delete (): Promise<void> {
  //   return this.cats
  // }
}
