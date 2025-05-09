import { Module } from '@nestjs/common';
import { FizzBuzzController } from './fizzbuzz.controller';
import { FizzBuzzService } from './fizzbuzz.service';

@Module({
  controllers: [FizzBuzzController],
  providers: [FizzBuzzService],
})
export class FizzBuzzModule {} 