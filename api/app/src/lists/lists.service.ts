import { Injectable } from '@nestjs/common';
import { List, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Injectable()
export class ListsService {

  constructor(private prisma: PrismaService) {}

  create(createListDto: CreateListDto) {
    return 'This action adds a new list';
  }

  async list(listWhereUniqueInput: Prisma.ListWhereUniqueInput,): Promise<List | null> {
    return this.prisma.list.findUnique({
      where: listWhereUniqueInput,
    });
  }

  async lists(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ListWhereUniqueInput;
    where?: Prisma.ListWhereInput;
    orderBy?: Prisma.ListOrderByWithRelationInput;
  }): Promise<List[]> {
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.list.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createList(data: Prisma.ListCreateInput): Promise<List> {
    return this.prisma.list.create({data});
  }

  findAll() {
    return `This action returns all lists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
