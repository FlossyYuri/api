import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { HttpModule } from '@nestjs/axios';
import { Attachment } from 'src/common/entities/attachment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Attachment])],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
