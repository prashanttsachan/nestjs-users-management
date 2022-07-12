import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "apps/common/src/shared/BaseResponse";

export class UserDto {

	@ApiProperty()
	userId: string;
	
	firstName: string;
	lastName: string;
	username: string;
	psalt: string;
  	password: string;
	isActive: boolean;
	remarks: string;
	createdAt: Date;
	updatedAt: Date;

    constructor(partial: Partial<UserDto>) {
		Object.assign(this, partial);
	}

    fullName = () => {
		return `${this.firstName} ${this.lastName}`
	}
}

export class UserResponse extends BaseResponse {
    data: UserDto | Array<UserDto>;
}