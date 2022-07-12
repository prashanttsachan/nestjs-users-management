import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repositories/user.repository';
import { MailsModule } from './mails/mails.module';
import { CommonModule } from 'apps/common/src/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'apps/common/src/entities/user.entity';
import { INTERFACE_ENUM } from './constants/enum';
import { UserProvider } from './providers/user.provider';

@Module({
	imports: [MailsModule, CommonModule, TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [{
		provide: INTERFACE_ENUM.IUSER_REPOSITORY,
		useClass: UserRepository
	}, {
		provide: INTERFACE_ENUM.IUSER_PROVIDER,
		useClass: UserProvider
	}],
	exports:[MailsModule]
})
export class Users {}
