import { Test, TestingModule } from '@nestjs/testing';
import { MailRepo } from './mail.repo';

describe('MailService', () => {
  let service: MailRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailRepo],
    }).compile();

    service = module.get<MailRepo>(MailRepo);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
