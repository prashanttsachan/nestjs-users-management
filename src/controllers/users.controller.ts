import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Inject, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { User } from 'apps/common/src/entities/user.entity';
import { FindOptionsWhere } from 'typeorm';
import { INTERFACE_ENUM } from '../constants/enum';
import { UserDto, UserResponse } from '../dto/users.dto';
import { IUserProvider } from '../interfaces/iUser.provider';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
	constructor(
		@Inject(INTERFACE_ENUM.IUSER_PROVIDER)
		private readonly _userProvider: IUserProvider) {}

	@Post('create')
	createUser(@Body() user: User): Promise<UserResponse> {
		return this._userProvider.create(user);
	}

	@Get('all')
	findAll(): Promise<UserResponse> {
		return this._userProvider.findAll();
	}

	@Get(':id')
	findById(@Param('id') id: string): Promise<UserResponse> {
		return this._userProvider.findById(id);
	}

	@Post('filter-by')
	findBy(@Body() user: FindOptionsWhere<User>): Promise<UserResponse> {
		return this._userProvider.findBy(user);
	}

	@Put(':id')
	updateById(@Param('id') id: string, @Body() updateUserDTO: UserDto): Promise<any> {
		return this._userProvider.updateById(id, updateUserDTO);
	}

	@Delete(':id')
	deleteById(@Param('id') id: string): Promise<any> {
		return this._userProvider.deleteById(id);
	}
}
