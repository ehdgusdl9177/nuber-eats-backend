import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateResturantDto } from './dtos/create-restuarant.dto';
import { Restaurant } from './entities/restaurant.entity';

import { RestaurantService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateResturantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
