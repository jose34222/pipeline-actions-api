import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('FizzBuzz', () => {
    it('/fizzbuzz/15 (GET)', () => {
      return request(app.getHttpServer())
        .get('/fizzbuzz/15')
        .expect(200)
        .expect('FizzBuzz');
    });

    it('/fizzbuzz/3 (GET)', () => {
      return request(app.getHttpServer())
        .get('/fizzbuzz/3')
        .expect(200)
        .expect('Fizz');
    });

    it('/fizzbuzz/5 (GET)', () => {
      return request(app.getHttpServer())
        .get('/fizzbuzz/5')
        .expect(200)
        .expect('Buzz');
    });

    it('/fizzbuzz/1 (GET)', () => {
      return request(app.getHttpServer())
        .get('/fizzbuzz/1')
        .expect(200)
        .expect('1');
    });
  });

  describe('Ping', () => {
    it('/ping (GET)', () => {
      return request(app.getHttpServer())
        .get('/ping')
        .expect(200)
        .expect({ message: 'pong' });
    });
  });
});
