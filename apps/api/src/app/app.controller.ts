import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDTO } from './types';
import { ApiInterfaces } from '@ng-learn/shared/util/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  getData() {
    return this.appService.list();
  }

  @Post('tasks')
  @HttpCode(201)
  add(@Body() createTaskDTO: CreateTaskDTO) {
    return this.appService.add(createTaskDTO);
  }

  @Delete('tasks/:id')
  @HttpCode(204)
  remove(@Param('id') taskId: string) {
    return this.appService.remove(taskId);
  }

  @Patch('tasks/:id')
  update(@Param('id') taskId: string, @Body() task: ApiInterfaces.Task) {
    return this.appService.update({ ...task, id: taskId });
  }
}
