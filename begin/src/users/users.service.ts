import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { genSaltSync, hashSync } from 'bcryptjs'
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }
  hashPassword(plain: string): string {
    const salt = genSaltSync(10);
    const hash = hashSync(plain, salt);
    return hash
  }
  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.userModel.create({
      ...createUserDto,
      password: this.hashPassword(createUserDto.password)
    });
    return createdUser;
  }

  findAll() {
    return `This action returns all users`;
  }
  async findOneByUsername(username: string) {
    const user = await this.userModel.findOne({ email: username })
    return user
  }
  async findOne(id: string) {
    const user = await this.userModel.findById(id).select("-password")
    return user
  }

  async update(updateUserDto: UpdateUserDto) {
    const user = await this.userModel.updateOne({ _id: updateUserDto._id }, {
      name: updateUserDto.name,
      email: updateUserDto.email
    })
    return user
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
