import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn("uuid")
	userId: string;

	@Column()
	@IsString()
	firstName: string;

	@IsString()
	@Column()
	lastName: string;

	@Column({unique: true})
	username: string;

	@Column()
	@Exclude()
	psalt: string;

	@Column()
	@Exclude()
  	password: string;

	@Column({ default: false })
	isActive: boolean;

	@Column({nullable: true})
	remarks: string;

	@CreateDateColumn()
	createdAt: Date;
	
	@UpdateDateColumn()
	updatedAt: Date;
	
	@Exclude()
	@DeleteDateColumn()
	deletedAt: Date;

	fullName = () => {
		return `${this.firstName} ${this.lastName}`
	}

	constructor(partial: Partial<User>) {
		Object.assign(this, partial);
	}
}