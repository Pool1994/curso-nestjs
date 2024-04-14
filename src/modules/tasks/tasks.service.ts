import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskCreationAttributes } from './entities/task.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Paginate } from 'src/lib/pagination/Paginate';


@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskModel: typeof Task) {
  }
  create(createTaskDto: CreateTaskDto) {

    return 'This action adds a new task';
  }

  async findAll(params: { page: number, per_page, sort_by: string }) {
    return Paginate(Task, {
      page: params.page,
      limit: params.per_page,
      findOptions: {
        order: [['id', params.sort_by.toUpperCase()]],
      },
      transformData: (records) => {
        return records.map(record => {
          return {
            id: record.id,
            title: record.title,
            description: record.description,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt
          } as Task;
        });
      }
    });
  }

  findOne(id: number) {
    return this.taskModel.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
