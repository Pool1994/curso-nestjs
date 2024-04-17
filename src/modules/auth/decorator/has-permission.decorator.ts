import { SetMetadata } from '@nestjs/common';

export const HasPermission = (...args: string[]) => SetMetadata('has-permission', args);