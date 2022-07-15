import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsUUID } from "class-validator";
import { UserDto } from "../../dto/users.dto";

export class MailDto {

    @IsUUID()
    @ApiProperty()
	mailId: string;
    
    @IsUUID()
    @ApiProperty()
    userId: string;
    
    @ApiProperty()
    user: UserDto;

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsBoolean()
    @ApiProperty()
    isActive: boolean;

    @IsBoolean()
    @ApiProperty()
    isVerified: boolean;

    @IsDate()
    @ApiProperty()
    verifiedAt: Date;
    
    @IsDate()
    @ApiProperty()
    createdAt: Date;
    
    @IsDate()
    @ApiProperty()
    updatedAt: Date;
}
