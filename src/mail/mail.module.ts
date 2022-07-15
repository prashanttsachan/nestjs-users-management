import { Module } from '@nestjs/common';
import { MailProvider } from './providers/mail.provider';
import { MailController } from './controllers/mail.controller';
import { INTERFACE_ENUM } from '../constants/enum';
import { MailRepo } from './repo/mail.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from 'apps/user/entities';

@Module({
	imports: [TypeOrmModule.forFeature([Mail])],
	controllers: [MailController],
	providers: [{
		provide: INTERFACE_ENUM.IMAIL_PROVIDER,
		useClass: MailProvider
	}, {
		provide: INTERFACE_ENUM.IMAIL_REPOSITORY,
		useClass: MailRepo
	}]
})
export class MailModule {}
