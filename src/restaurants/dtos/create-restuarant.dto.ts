import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class CreateResturantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
