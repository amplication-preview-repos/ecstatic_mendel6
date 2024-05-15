/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { InstanceSpecification } from "./InstanceSpecification";
import { InstanceSpecificationCountArgs } from "./InstanceSpecificationCountArgs";
import { InstanceSpecificationFindManyArgs } from "./InstanceSpecificationFindManyArgs";
import { InstanceSpecificationFindUniqueArgs } from "./InstanceSpecificationFindUniqueArgs";
import { CreateInstanceSpecificationArgs } from "./CreateInstanceSpecificationArgs";
import { UpdateInstanceSpecificationArgs } from "./UpdateInstanceSpecificationArgs";
import { DeleteInstanceSpecificationArgs } from "./DeleteInstanceSpecificationArgs";
import { MinecraftServerFindManyArgs } from "../../minecraftServer/base/MinecraftServerFindManyArgs";
import { MinecraftServer } from "../../minecraftServer/base/MinecraftServer";
import { InstanceSpecificationService } from "../instanceSpecification.service";
@graphql.Resolver(() => InstanceSpecification)
export class InstanceSpecificationResolverBase {
  constructor(protected readonly service: InstanceSpecificationService) {}

  async _instanceSpecificationsMeta(
    @graphql.Args() args: InstanceSpecificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [InstanceSpecification])
  async instanceSpecifications(
    @graphql.Args() args: InstanceSpecificationFindManyArgs
  ): Promise<InstanceSpecification[]> {
    return this.service.instanceSpecifications(args);
  }

  @graphql.Query(() => InstanceSpecification, { nullable: true })
  async instanceSpecification(
    @graphql.Args() args: InstanceSpecificationFindUniqueArgs
  ): Promise<InstanceSpecification | null> {
    const result = await this.service.instanceSpecification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InstanceSpecification)
  async createInstanceSpecification(
    @graphql.Args() args: CreateInstanceSpecificationArgs
  ): Promise<InstanceSpecification> {
    return await this.service.createInstanceSpecification({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => InstanceSpecification)
  async updateInstanceSpecification(
    @graphql.Args() args: UpdateInstanceSpecificationArgs
  ): Promise<InstanceSpecification | null> {
    try {
      return await this.service.updateInstanceSpecification({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InstanceSpecification)
  async deleteInstanceSpecification(
    @graphql.Args() args: DeleteInstanceSpecificationArgs
  ): Promise<InstanceSpecification | null> {
    try {
      return await this.service.deleteInstanceSpecification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [MinecraftServer], { name: "minecraftServers" })
  async findMinecraftServers(
    @graphql.Parent() parent: InstanceSpecification,
    @graphql.Args() args: MinecraftServerFindManyArgs
  ): Promise<MinecraftServer[]> {
    const results = await this.service.findMinecraftServers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
