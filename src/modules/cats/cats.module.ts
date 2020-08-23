import { Module } from '@nestjs/common'
import { CatsController } from './controllers/cat.controller'
import { CatsService } from './services/cats.service'

@Module({
  controllers: [CatsController],
  providers: [CatsService]
})
class CatsModule {}

export default CatsModule
