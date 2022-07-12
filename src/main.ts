import { NestFactory } from '@nestjs/core';
import { Users } from './users.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(Users);
	const config = new DocumentBuilder()
		.setTitle('Crypto Exchange')
		.setDescription('The crypto exchange description')
		.setVersion('1.0')
		.addTag('exchange')
		.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('swagger', app, document);
	await app.listen(4001);
	
}

bootstrap();