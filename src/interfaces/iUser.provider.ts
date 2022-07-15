import { FindOptionsWhere } from "typeorm";
import { UserDto, Response } from "../dto/users.dto";

export interface IUserProvider {
	deleteById(id: string): Promise<any>;
	updateById(id: string, updateUserDTO: UserDto): Promise<any>;
	findBy(user: FindOptionsWhere<UserDto>): Promise<Response>;
	findById(id: string): Promise<Response>;
	findAll(): Promise<Response>;
	create(user: UserDto): Promise<Response>;
}