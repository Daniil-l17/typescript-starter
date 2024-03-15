import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTacks() {
    return this.taskService.getAll()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTack(@Body() dto: TaskDto){
    return this.taskService.createTask(dto)
  }

  @Patch(':id')
  async togleDone(@Param('id') id:string){
    return this.taskService.toggleDone(id)
  }

  @Get(':id')
  async getTackId(@Param('id') id:string){
    return this.taskService.getTackId(+id)
  }

  @UsePipes(new ValidationPipe())
  @Patch('/updatetask/:id')
  async getUpdateTask(@Param('id') id:string,@Body() dto: TaskDto){
    return this.taskService.getUpdateTask(+id,dto)
  }

  @Delete(':id')
  async deleteTask(@Param('id') id:string){
    return this.taskService.deleteTask(+id)
  }
}
