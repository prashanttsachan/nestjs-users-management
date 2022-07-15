import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repositories/user.repository';
import { CommonModule } from 'apps/shared/src/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as UserEntity, Mail } from 'apps/user/entities';
import { INTERFACE_ENUM } from './constants/enum';
import { UserProvider } from './providers/user.provider';
import { MailModule } from './mail/mail.module';
import { DATABASE } from './constants/database';

@Module({
	imports: [
		CommonModule, 
		TypeOrmModule.forRoot({
			type: 'mysql',
			...DATABASE,
			entities: [UserEntity, Mail],
			synchronize: true,
		}),
		TypeOrmModule.forFeature([UserEntity]),
		MailModule
	],
	controllers: [UsersController],
	providers: [{
		provide: INTERFACE_ENUM.IUSER_REPOSITORY,
		useClass: UserRepository
	}, {
		provide: INTERFACE_ENUM.IUSER_PROVIDER,
		useClass: UserProvider
	}],
	exports:[MailModule]
})
export class User {}
