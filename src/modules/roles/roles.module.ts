import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permissions.entity';
import { RoleHasPermission } from './entities/has/role_has_permissions.entity';
import { UserHasRole } from './entities/has/user_has_roles.entity';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports:[SequelizeModule.forFeature([Role,Permission,RoleHasPermission,UserHasRole])]
})
export class RolesModule {}
