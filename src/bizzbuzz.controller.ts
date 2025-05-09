import { Controller, Get, Query } from '@nestjs/common';

@Controller('bizzbuzz')
export class BizzBuzzController {
  @Get()
  getBizzBuzz(@Query('n') n: string): string[] {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1) {
      return ['Invalid input'];
    }
    const result: string[] = [];
    for (let i = 1; i <= num; i++) {
      if (i % 15 === 0) result.push('BizzBuzz');
      else if (i % 3 === 0) result.push('Bizz');
      else if (i % 5 === 0) result.push('Buzz');
      else result.push(i.toString());
    }
    return result;
  }
} 