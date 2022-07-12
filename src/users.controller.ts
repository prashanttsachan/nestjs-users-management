import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { User } from 'apps/common/src/entities/user.entity';
import { FindOptionsWhere } from 'typeorm';
import { createUserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('create')
	createUser(@Body() user: createUserDto): Promise<User> {
		return this.usersService.create(user);
	}

	@Get('all')
	findAll(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Get(':id')
	findById(id: any): Promise<User> {
		return this.usersService.findById(id);
	}

	@Post('filter-by')
	findBy(@Body() user: FindOptionsWhere<User>): Promise<User[]> {
		return this.usersService.findBy(user);
	}

	@Put(':id')
	updateById(@Param('id') id: string, @Body() updateUserDTO: Partial<User>): Promise<any> {
		return this.usersService.updateById(id, updateUserDTO);
	}

	@Delete(':id')
	deleteById(@Param('id') id: string): Promise<any> {
		return this.usersService.deleteById(id);
	}
}
