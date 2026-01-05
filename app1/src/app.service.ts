import { Injectable } from '@nestjs/common';
import { prisma } from './lib/prisma';

@Injectable()
export class AppService {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
  async createUser(data: { name: string; idType: string }) {
    const user = await prisma.user.create({
      data: {
        nombre: data.name,
        idType: parseInt(data.idType),
      },
    });
    return user;
  }
}
