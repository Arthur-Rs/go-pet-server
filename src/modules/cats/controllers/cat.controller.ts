import { Controller, Get, Post, Body } from '@nestjs/common'
import { CatsService } from '../services/cats.service'
import ICreateCatDTO from '../dtos/create_cats.dto'
import ICat from '../entities/cat.entity'

@Controller('cats')
export class CatsController {
  constructor (private catsServices: CatsService) {}

  @Post()
  public async createCat (@Body() { name, age, breed }:ICreateCatDTO): Promise<ICat> {
    return await this.catsServices.create({ name, age, breed })
  }

  // @Get()
  // public async findAll (): Promise<ICat[]> {
  //   return await this.catsServices.findAll()
  // }
}
