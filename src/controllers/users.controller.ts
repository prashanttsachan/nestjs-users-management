import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Inject, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindOptionsWhere } from 'typeorm';
import { INTERFACE_ENUM } from '../constants/enum';
import { UserDto, Response } from '../dto/users.dto';
import { IUserProvider } from '../interfaces/iUser.provider';

@ApiTags('Users')
@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
	constructor(
		@Inject(INTERFACE_ENUM.IUSER_PROVIDER)
		private readonly _userProvider: IUserProvider) {}

	@Post('create')
	createUser(@Body() user: UserDto): Promise<Response> {
		return this._userProvider.create(user);
	}

	@Get('all')
	findAll(): Promise<Response> {
		return this._userProvider.findAll();
	}

	@Get(':id')
	findById(@Param('id') id: string): Promise<Response> {
		return this._userProvider.findById(id);
	}

	@Post('filter-by')
	findBy(@Body() user: FindOptionsWhere<UserDto>): Promise<Response> {
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
