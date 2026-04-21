import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BarberModule } from './barber/barber.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, BarberModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
