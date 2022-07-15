import { MailDto } from "../dto/mail.dto";

export interface IMailRepo {
	remove(id: string);
	update(id: string, mail: MailDto);
	findOne(id: string);
	findAll();
	create(mail: MailDto);
}
