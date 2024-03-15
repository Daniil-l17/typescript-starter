import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from 'src/prisma.serves';

@Injectable()
export class TaskService {
  constructor(private prisma:PrismaService){}



  getAll(){
    return this.prisma.task.findMany()
  }

  createTask(dto:TaskDto) {
    return this.prisma.task.create({
      data: dto
    })
  }


  async toggleDone(id:string){
    const task = await this.prisma.task.findUnique({
      where:{
        id: +id
      }
    }) 
    if(!task) throw new NotFoundException('Task not found')
    return this.prisma.task.update({
      where: {
        id: task.id
      },
      data: {
        isDone: !task.isDone
      }
    })
  }

  getUpdateTask(id:number,dto:TaskDto){
    return this.prisma.task.update({
      where: {
        id
      },
      data: {
        title: dto.title
      }
    })
  }


  async deleteTask(id:number){
    return await this.prisma.task.delete({
      where: {
        id
      },
    })
  }

  getTackId(id:number){
    return this.prisma.task.findUnique({
      where: {
        id: id
      }
    })
  }
}
