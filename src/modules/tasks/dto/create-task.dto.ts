import { StatusTask } from "../entities/task.entity";

export class CreateTaskDto {
    title: string;
    description: string
    status: StatusTask
}
