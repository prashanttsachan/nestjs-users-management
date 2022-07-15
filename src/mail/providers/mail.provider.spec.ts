import { Test, TestingModule } from '@nestjs/testing';
import { MailProvider } from './mail.provider';

describe('MailService', () => {
  let service: MailProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailProvider],
    }).compile();

    service = module.get<MailProvider>(MailProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
