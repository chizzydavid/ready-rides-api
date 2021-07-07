import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "./entities/car";
import { Repository } from "typeorm";
import { NewCarInput } from "./dto/new-car.input";


@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}
  
  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find().catch((err) => {
      throw new InternalServerErrorException(err);
    });
  }

  public async addCar(options: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(options);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException(err);
    });

    return newCar;
  }
}

