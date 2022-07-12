import { User } from "apps/common/src/entities/user.entity";
import { FindOptionsWhere } from "typeorm";
import { UserDto, UserResponse } from "../dto/users.dto";

export interface IUserRepository {
	deleteById(id: string): Promise<any>;
	updateById(id: string, updateUserDTO: UserDto): Promise<any>;
	findBy(user: FindOptionsWhere<User>): Promise<UserResponse>;
	findById(id: string): Promise<UserResponse>;
	findAll(): Promise<UserResponse>;
	create(user: User): Promise<UserResponse>;
}