import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Analytics extends CoreEntity {
  @Column()
  totalRevenue?: number;
  @Column()
  totalShops?: number;
  @Column()
  todaysRevenue?: number;
  @Column()
  totalOrders?: number;
  @Column()
  newCustomers?: number;
  @OneToMany(() => TotalYearSaleByMonth, (total) => total.analytic)
  totalYearSaleByMonth?: TotalYearSaleByMonth[];
}

@Entity()
export class TotalYearSaleByMonth extends CoreEntity {
  @ManyToOne(() => Analytics, (analytic) => analytic.totalYearSaleByMonth)
  analytic: Analytics;
  @Column()
  total?: number;
  @Column()
  month?: string;
}
