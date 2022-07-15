import { NestFactory } from '@nestjs/core';
import { User } from './src/user.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ENVIRONMENT } from 'apps/crypto/src/shared/enum';

async function bootstrap() {
	process.env.NODE_ENV = process.env.NODE_ENV || ENVIRONMENT.development;

	const app = await NestFactory.create<NestFastifyApplication>(User, new FastifyAdapter());

	// const config = new DocumentBuilder()
	// 	.setTitle('Crypto Exchange')
	// 	.setDescription('The crypto exchange description')
	// 	.setVersion('1.0')
	// 	.addTag('exchange')
	// 	.build();
	// 	const document = SwaggerModule.createDocument(app, config);
	// 	SwaggerModule.setup('swagger', app, document);
	await app.listen(4001);
	
}

bootstrap();