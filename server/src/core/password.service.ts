import {Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt-node';

@Injectable()
export class PasswordService {

  private readonly SALT_ROUNDS: number = 10;

  generatePassword(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(this.SALT_ROUNDS));
  }

  comparePassword(password: string, hash: string): boolean {
    console.log(password, hash);
    return bcrypt.compareSync(password, hash);
  }

}