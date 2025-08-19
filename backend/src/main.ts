import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { webcrypto } from 'crypto';

// Polyfill for global crypto in Node < 18.19
// Ensures libraries that expect globalThis.crypto work correctly
if (typeof globalThis.crypto === 'undefined') {
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
    enumerable: true,
    writable: true,
  });
}

async function bootstrap() {
  // Import AppModule only after setting crypto polyfill
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
  const { AppModule } = require('./app.module');
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors({
    origin: [
      'http://localhost:3001', // Local development
      process.env.FRONTEND_URL, // Production frontend URL
      /\.vercel\.app$/, // Allow all Vercel domains
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // Global validation pipe for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) =>
  console.error('Error starting the application:', err),
);
