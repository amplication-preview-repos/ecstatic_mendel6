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
import { MinecraftServerWhereUniqueInput } from "./MinecraftServerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MinecraftServerUpdateInput } from "./MinecraftServerUpdateInput";

@ArgsType()
class UpdateMinecraftServerArgs {
  @ApiProperty({
    required: true,
    type: () => MinecraftServerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MinecraftServerWhereUniqueInput)
  @Field(() => MinecraftServerWhereUniqueInput, { nullable: false })
  where!: MinecraftServerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MinecraftServerUpdateInput,
  })
  @ValidateNested()
  @Type(() => MinecraftServerUpdateInput)
  @Field(() => MinecraftServerUpdateInput, { nullable: false })
  data!: MinecraftServerUpdateInput;
}

export { UpdateMinecraftServerArgs as UpdateMinecraftServerArgs };
