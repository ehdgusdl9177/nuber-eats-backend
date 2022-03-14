import { Module } from '@nestjs/common';
import { RestuarantResolver } from './restuarants.resolver';

@Module({
  providers: [RestuarantResolver],
})
export class RestaurantsModule {}
