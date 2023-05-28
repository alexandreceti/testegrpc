import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GrpcUsersController } from './users/grpc-users.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, GrpcUsersController],
  providers: [AppService],
})
export class AppModule {}
