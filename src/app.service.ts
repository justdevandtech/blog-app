import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Array<any> {
    return [
      {
        message: 'Welcome to my Blog app, built with nestjs and prisma',
      },
    ];
  }
}
