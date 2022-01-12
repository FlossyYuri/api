import { HttpService } from '@nestjs/axios';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/save-upload.dto';
import { UploadsService } from './uploads.service';

@Controller('attachments')
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
    private httpService: HttpService,
  ) {}

  @Post()
  saveUpload(@Body() createAttachmentDto: CreateAttachmentDto) {
    return this.uploadsService.create(createAttachmentDto);
  }
}
