import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restuarant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isVegan: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;
}