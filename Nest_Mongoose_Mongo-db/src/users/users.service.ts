import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { SinginDTO } from './dto/signin.dto';
import { SingupDTO } from './dto/singup.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly usersMoodel: Model<User>,
    private readonly authService: AuthService,
  ) {}

  public async signup(singupDto: SingupDTO): Promise<User> {
    const user = new this.usersMoodel(singupDto);
    return user.save();
  }

  public async signin(
    signin: SinginDTO,
  ): Promise<{ name: string; jwtToken: string; email: string }> {
    const user = await this.findByEmail(signin.email);
    const match = await this.checkPassword(signin.password, user);

    if (!match) {
      throw new NotFoundException('Invalid credentials');
    }

    const jwtToken = await this.authService.createAccessToken(user._id);
    return { name: user.name, jwtToken, email: user.email };
  }

  private async findByEmail(email: string): Promise<User> {
    const user = await this.usersMoodel.findOne({ email });
    if (!user) {
      throw new NotFoundException('email not found');
    }
    return user;
  }

  private async checkPassword(passowrd: string, user: User): Promise<boolean> {
    const match = await bcrypt.compare(passowrd, user.password);
    if (!match) {
      throw new NotFoundException('Password not found');
    }
    return match;
  }

  public async findAll(): Promise<User[]> {
    return this.usersMoodel.find();
  }
}
