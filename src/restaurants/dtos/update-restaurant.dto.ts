import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateResturantDto } from './create-restuarant.dto';

@InputType()
class UpdateRestaurantInputType extends PartialType(CreateResturantDto) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
