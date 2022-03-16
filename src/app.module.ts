import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookMarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, BookMarkModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
