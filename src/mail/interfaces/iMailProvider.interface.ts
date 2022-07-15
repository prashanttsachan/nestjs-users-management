import { MailDto } from "../dto/mail.dto";

export interface IMailProvider {
	remove(arg0: string);
	update(arg0: string, updateMailDto: MailDto);
	findOne(arg0: string);
	findAll();
	create(createMailDto: MailDto);
}
