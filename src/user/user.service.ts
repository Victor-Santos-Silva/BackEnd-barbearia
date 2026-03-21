import { Injectable } from '@nestjs/common';
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

  async deleteId() {}
}
