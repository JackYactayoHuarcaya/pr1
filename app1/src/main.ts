import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// @ts-ignore
import { createServer } from 'vite';
import path from 'path';
import type { NextFunction, Request, Response } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const viteServer = await createServer({
    server: {
      middlewareMode: true,
    },
    appType: 'spa',
    root: path.join(__dirname, '..', '..', '..', 'app2'),
  });

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    const url = req.url;
    if (url.startsWith('/api')) {
      return next();
    } else {
      return await viteServer.middlewares(req, res, next);
    }
  });
  await app.listen(3000, () => {
    console.log('Nest server running on http://localhost:3000');
  });
}
bootstrap();
