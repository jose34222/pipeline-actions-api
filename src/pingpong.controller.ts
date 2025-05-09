import { Controller, Get, Query } from '@nestjs/common';

@Controller('pingpong')
export class PingPongController {
  @Get()
  getPingPong(@Query('n') n: string): string[] {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1) {
      return ['Invalid input'];
    }
    const result: string[] = [];
    for (let i = 1; i <= num; i++) {
      if (i % 7 === 0 && i % 4 === 0) result.push('PingPong');
      else if (i % 4 === 0) result.push('Ping');
      else if (i % 7 === 0) result.push('Pong');
      else result.push(i.toString());
    }
    return result;
  }
} 