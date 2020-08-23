import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import Cats from '../../modules/cats/cats.module'
import { LoggerMiddleware } from '../middlewares/logger.middleware'

@Module({
  imports: [Cats]
})
export class Application implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/')
  }
}
