import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MailsModule } from './mails/mails.module';
import { CommonModule } from 'apps/common/src/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'apps/common/src/entities/user.entity';

@Module({
	imports: [MailsModule, CommonModule, TypeOrmModule.forFeature([User])],
	controllers: [UsersController],
	providers: [UsersService],
	exports:[MailsModule]
})
export class Users {}
