import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const teste = () => {
      console.log('OK>>>>');
    };
    teste();
    return 'Hello World!';
  }
}
