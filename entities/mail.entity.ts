import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { User } from 'apps/user/entities/user.entity';

@Entity('mails')
export class Mail {
    @PrimaryGeneratedColumn("uuid")
	mailId: string;

    @Column({ name: 'userId' })
    userId: string;

    @OneToOne(type => User)
    @JoinColumn ({ name: 'userId' })
    user: User;

    @Column()
    @IsEmail()
	email: string;

    @Column({ default: true })
	type: boolean;

    @Column({ default: false })
	isActive: boolean;

    @Column({ default: false })
	isVerified: boolean;

    @Column({default: null})
    verifiedAt: Date;

    @CreateDateColumn()
	createdAt: Date;
	
	@UpdateDateColumn()
	updatedAt: Date;
	
	@Exclude()
	@DeleteDateColumn()
	deletedAt: Date;
}
