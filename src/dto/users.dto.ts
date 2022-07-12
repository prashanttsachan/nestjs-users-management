export interface createUserDto {
	userId: number;
	firstName: string;
	lastName: string;
	username: string;
	psalt: string;
  	password: string;
	isActive: boolean;
	remarks: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}

///* "https://json.schemastore.org/nest-cli", */

export class User {

}