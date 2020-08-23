import { NestFactory } from '@nestjs/core'
import { Application } from './app/app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(Application)
  await app.listen(3333)
}

export default bootstrap
