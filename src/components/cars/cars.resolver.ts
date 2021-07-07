import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { Car } from "./entities/car";
import { NewCarInput } from "./dto/new-car.input";


@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) { }
  
  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Car)
  public async addNewCar(
    @Args('options') options : NewCarInput
  ): Promise<Car> {
    return await this.carsService.addCar(options).catch((err) => {
      throw err;
    });
  }
}
