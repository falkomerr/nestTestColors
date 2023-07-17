import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getColor(): string {
    const color = 'green'
    return color;
  }
}
