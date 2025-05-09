import { Module } from '@nestjs/common';
import { FizzBuzzModule } from './fizzbuzz/fizzbuzz.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [FizzBuzzModule, PingModule],
})
export class AppModule {}
