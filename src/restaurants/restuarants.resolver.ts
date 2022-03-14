import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restuarant } from './entities/restuarant.entity';

@Resolver(() => Restuarant)
export class RestuarantResolver {
  @Query(() => [Restuarant])
  restuarants(@Args('veganOnly') veganOnly: boolean): Restuarant[] {
    return [];
  }
}
