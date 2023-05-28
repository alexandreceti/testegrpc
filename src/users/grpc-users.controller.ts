import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';

import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class GrpcUsersController {
  @GrpcMethod('UsersService', 'create')
  create(data, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    console.log('aqui menda');
    return { id: 1, ...data };
  }
}
