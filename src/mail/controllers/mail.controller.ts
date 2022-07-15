import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { INTERFACE_ENUM } from '../../constants/enum';
import { MailDto } from '../dto/mail.dto';
import { IMailProvider } from '../interfaces/iMailProvider.interface';

@ApiTags('Mails')
@Controller('mail')
export class MailController {
	constructor(
		@Inject(INTERFACE_ENUM.IMAIL_PROVIDER) 
		private readonly _iMailProvider: IMailProvider
	) {}

	@Post()
	create(@Body() createMailDto: MailDto) {
		return this._iMailProvider.create(createMailDto);
	}

	@Get()
	findAll() {
		return this._iMailProvider.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this._iMailProvider.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateMailDto: MailDto) {
		return this._iMailProvider.update(id, updateMailDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this._iMailProvider.remove(id);
	}
}
