import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attachment } from 'src/common/entities/attachment.entity';
import { getConnection, Repository } from 'typeorm';
import { CreateAttachmentDto } from './dto/save-upload.dto';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
  ) {}
  async create({ links }: CreateAttachmentDto) {
    const attachments = [];
    for (let index = 0; index < links.length; index++) {
      const newAttachment = this.attachmentRepository.create({
        thumbnail: links[index],
        original: links[index],
      });
      attachments.push(await this.attachmentRepository.save(newAttachment));
    }
    console.log('all attach =>', attachments);
    return attachments;
  }
  findAll() {
    return `This action returns all uploads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
