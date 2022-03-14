import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateResturantDto } from './dtos/create-restuarant.dto';
import { Restuarant } from './entities/restuarant.entity';

@Resolver(() => Restuarant)
export class RestuarantResolver {
  @Query(() => [Restuarant])
  restuarants(@Args('veganOnly') veganOnly: boolean): Restuarant[] {
    return [];
  }
  @Mutation(() => Boolean)
  createRestuarant(@Args() createRestuarantDto: CreateResturantDto): boolean {
    console.log(createRestuarantDto);
    return true;
  }
}
