import { Inject, Injectable } from '@nestjs/common';
import { INTERFACE_ENUM } from '../../constants/enum';
import { MailDto } from '../dto/mail.dto';
import { IMailProvider } from '../interfaces/iMailProvider.interface';
import { IMailRepo } from '../interfaces/iMailRepo.interface';

@Injectable()
export class MailProvider implements IMailProvider{

	constructor(
		@Inject(INTERFACE_ENUM.IMAIL_REPOSITORY)
		private readonly _iMailRepo: IMailRepo
	) {}

	create(mail: MailDto) {
		return this._iMailRepo.create(mail);
	}

	findAll() {
		return this._iMailRepo.findAll();
	}

	findOne(id: string) {
		return this._iMailRepo.findOne(id);
	}

	update(id: string , mail: MailDto) {
		return this._iMailRepo.update(id, mail);
	}

	remove(id: string) {
		return this._iMailRepo.remove(id);
	}
}
