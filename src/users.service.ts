import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'apps/common/src/entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { createUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepo: Repository<User>,
	) {}

	create(user: createUserDto): Promise<User> {
		return this.usersRepo.save(user);
	}
	
	findById(id: any): Promise<User> {
		return this.usersRepo.findOneBy({userId: id});
	}

	findAll(): Promise<User[]> {
		return this.usersRepo.find();
	}

	findBy(options: FindOptionsWhere<User>): Promise<User[]> {
		return this.usersRepo.findBy(options);
	}

	updateById(userId: string, user: Partial<User>): Promise<any> {
		return this.usersRepo.update(userId, user);
	}

	deleteById(userId: string): Promise<any> {
		return this.usersRepo.softDelete(userId);
	}
}
