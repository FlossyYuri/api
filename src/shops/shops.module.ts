import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController, StaffsController } from './shops.controller';
import { Shop } from './entities/shop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopsController, StaffsController],
  providers: [ShopsService],
})
export class ShopsModule {}
