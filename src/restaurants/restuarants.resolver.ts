import { Query, Resolver } from '@nestjs/graphql';
import { Restuarant } from './entities/restuarant.entity';

@Resolver(() => Restuarant)
export class RestuarantResolver {
  @Query(() => Restuarant)
  myRestuarant() {
    return true;
  }
}
