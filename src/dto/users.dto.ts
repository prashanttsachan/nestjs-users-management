import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "apps/shared/src/shared/BaseResponse";
import { MailDto } from "../mail/dto/mail.dto";

export class UserDto {

	@ApiProperty()
	userId: string;
	
	@ApiProperty()
	firstName: string;

	@ApiProperty()
	lastName: string;

	@ApiProperty()
	username: string;

	@ApiProperty()
	psalt: string;

	@ApiProperty()
  	password: string;

	@ApiProperty()
	isActive: boolean;
	
	@ApiProperty()
	remarks: string;
	
	@ApiProperty()
	createdAt: Date;
	
	@ApiProperty()
	updatedAt: Date;

    constructor(partial: Partial<UserDto>) {
		Object.assign(this, partial);
	}

    fullName = () => {
		return `${this.firstName} ${this.lastName}`
	}
}

export class Response<T = UserDto | Array<UserDto> | MailDto | MailDto[]> extends BaseResponse {
    data: T;
}