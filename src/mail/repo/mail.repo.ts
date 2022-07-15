import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mail } from 'apps/user/entities';
import { MailDto } from '../dto/mail.dto';
import { IMailRepo } from '../interfaces/iMailRepo.interface';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Response } from '../../dto/users.dto';

@Injectable()
export class MailRepo implements IMailRepo {
	constructor(
		@InjectRepository(Mail)
		private _mailRepo: Repository<Mail>,
	) {}

	create = async (mail: MailDto): Promise<Response> => {
		const response: Response<MailDto> = new Response();
		try {
			const savedMail = await this._mailRepo.save(mail);
			if (!savedMail) 
				throw('Unable to fetch the data');
			response.data = savedMail;
			response.isSuccess = true;
		} catch (error) {
			response.error = error;
			response.isSuccess = false;
		}
		return response;
	}

	findAll = async (): Promise<Response> => {
		const response: Response<MailDto[]> = new Response();
		try {
			const mails = await this._mailRepo.find();
			if (!mails) 
				throw('Unable to fetch the data');
			response.data = mails;
			response.isSuccess = true;
		} catch (error) {
			response.error = error;
			response.isSuccess = false;
		}
		return response;
	}

	findOne = async (id: string): Promise<Response> => {
		const response: Response<MailDto> = new Response();
		try {
			const mail = await this._mailRepo.findOneBy({mailId: id});
			if (!mail) 
				throw('Unable to fetch the data');
			response.data = mail;
			response.isSuccess = true;
		} catch (error) {
			response.error = error;
			response.isSuccess = false;
		}
		return response;
	}

	update = async (id: string, mail: MailDto): Promise<any> => {
		return this._mailRepo.update(id, mail);
	}

	remove = async (id: string): Promise<any> => {
		return this._mailRepo.softRemove({mailId: id});
	}
}
