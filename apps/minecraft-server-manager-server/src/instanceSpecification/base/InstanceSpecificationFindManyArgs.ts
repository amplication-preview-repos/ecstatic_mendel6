/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstanceSpecificationWhereInput } from "./InstanceSpecificationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InstanceSpecificationOrderByInput } from "./InstanceSpecificationOrderByInput";

@ArgsType()
class InstanceSpecificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InstanceSpecificationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InstanceSpecificationWhereInput, { nullable: true })
  @Type(() => InstanceSpecificationWhereInput)
  where?: InstanceSpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: [InstanceSpecificationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InstanceSpecificationOrderByInput], { nullable: true })
  @Type(() => InstanceSpecificationOrderByInput)
  orderBy?: Array<InstanceSpecificationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InstanceSpecificationFindManyArgs as InstanceSpecificationFindManyArgs };
