import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from 'src/prisma.serves';

@Module({
  controllers: [TaskController],
  providers: [TaskService,PrismaService],
})
export class TaskModule {}
