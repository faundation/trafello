import { Resolver, Query, Int, Arg } from "type-graphql";

@Resolver()
export class MainResolver {
  @Query(() => String)
  ping(): string {
    return "pong";
  }

  @Query(() => Int)
  randomNumber(
    @Arg("min", { defaultValue: 0 }) min: number = 0,
    @Arg("max", { defaultValue: 100 }) max: number = 100
  ): number {
    return Math.floor(Math.random() * max + min);
  }
}
