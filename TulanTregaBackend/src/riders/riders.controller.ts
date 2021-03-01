import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RidersService } from './riders.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';

@Controller('riders')
export class RidersController {
  constructor(private readonly ridersService: RidersService) {}

  @Post()
  async create(@Body() createRiderDto: CreateRiderDto) {
    return this.ridersService.create(createRiderDto);
  }

  @Get()
  findAll() {
    return this.ridersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ridersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRiderDto: UpdateRiderDto) {
    return this.ridersService.update(+id, updateRiderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ridersService.remove(+id);
  }
}
