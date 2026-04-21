import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

const userSelect = {
  id: true,
  username: true,
  email: true,
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: userSelect,
    });
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: userSelect,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async updateUser(id: string, data: any) {
    // opcional: verificar se existe antes
    await this.getById(id);

    return this.prisma.user.update({
      where: { id },
      data,
      select: userSelect,
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
      select: userSelect,
    });
  }
}
