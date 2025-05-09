import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { FizzBuzzModule } from './fizzbuzz.module';

describe('FizzBuzz Integration Tests', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FizzBuzzModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('FizzBuzz Endpoints', () => {
    it('should handle valid numbers correctly', async () => {
      const testCases = [
        { input: 15, expected: 'FizzBuzz' },
        { input: 3, expected: 'Fizz' },
        { input: 5, expected: 'Buzz' },
        { input: 1, expected: '1' },
      ];

      for (const testCase of testCases) {
        const response = await request(app.getHttpServer())
          .get(`/fizzbuzz/${testCase.input}`)
          .expect(200);
        
        expect(response.text).toBe(testCase.expected);
      }
    });

    it('should handle invalid input gracefully', async () => {
      const invalidInputs = ['abc', '-1', '0', '1.5'];

      for (const input of invalidInputs) {
        await request(app.getHttpServer())
          .get(`/fizzbuzz/${input}`)
          .expect(400);
      }
    });

    it('should handle large numbers', async () => {
      const largeNumbers = [150, 300, 450];

      for (const number of largeNumbers) {
        const response = await request(app.getHttpServer())
          .get(`/fizzbuzz/${number}`)
          .expect(200);
        
        expect(response.text).toBe('FizzBuzz');
      }
    });
  });
}); 