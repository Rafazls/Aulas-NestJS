import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {

  @Get('hello')
  getHello(): string {
    return "Hello Word!";
  }
  @Get('hello2')
  getAbb(): string {
    return "qefhqfoqfoiqfob";
  }
  
}
