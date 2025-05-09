import { Controller, Get, Param, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { FizzBuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzBuzzController {
  constructor(private readonly fizzBuzzService: FizzBuzzService) {}

  @Get(':number')
  getFizzBuzz(@Param('number', ParseIntPipe) number: number): string {
    if (number <= 0) {
      throw new BadRequestException('Number must be positive');
    }
    return this.fizzBuzzService.getFizzBuzz(number);
  }
} 