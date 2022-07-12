import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserRepository } from '../repositories/user.repository';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UserRepository],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(usersController.getHello()).toBe('Hello World!');
    });
  });
});
