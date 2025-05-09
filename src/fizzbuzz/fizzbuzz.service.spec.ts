import { Test, TestingModule } from '@nestjs/testing';
import { FizzBuzzService } from './fizzbuzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzBuzzService],
    }).compile();

    service = module.get<FizzBuzzService>(FizzBuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFizzBuzz', () => {
    it('should return "FizzBuzz" for numbers divisible by 15', () => {
      expect(service.getFizzBuzz(15)).toBe('FizzBuzz');
      expect(service.getFizzBuzz(30)).toBe('FizzBuzz');
    });

    it('should return "Fizz" for numbers divisible by 3', () => {
      expect(service.getFizzBuzz(3)).toBe('Fizz');
      expect(service.getFizzBuzz(6)).toBe('Fizz');
    });

    it('should return "Buzz" for numbers divisible by 5', () => {
      expect(service.getFizzBuzz(5)).toBe('Buzz');
      expect(service.getFizzBuzz(10)).toBe('Buzz');
    });

    it('should return the number as string for other numbers', () => {
      expect(service.getFizzBuzz(1)).toBe('1');
      expect(service.getFizzBuzz(2)).toBe('2');
      expect(service.getFizzBuzz(4)).toBe('4');
    });
  });
}); 