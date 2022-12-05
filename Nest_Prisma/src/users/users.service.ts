import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  create(userData: CreateUserDto) {
    return this.repository.create(userData);
  }

  findAll() {
    // throw new unauthorizedError('Não autorizado'); TESTE DE INTERCEPTOR
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado');
    }

    return user;
  }

  update(id: number, userData: UpdateUserDto) {
    return this.repository.update(id, userData);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
