/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Inject, Injectable} from '@nestjs/common';
import {Level} from 'level';

@Injectable()
// @ts-ignore
export class DatabaseService {
  // @ts-ignore
  constructor(@Inject('DATABASE') public db: Level) {
  }
}
