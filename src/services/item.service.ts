import { Car } from '../interfaces/car.interface';
import { db } from '../lib/db';

const getCars = async () => {
  const response = await db.car.findMany();
  return response;
}

const insertCar = async (item: Car) => {
  const responseItem = await db.car.create({
    data: item
  });
  return responseItem;
}

const getCar = async (id: string) => {
  const response = await db.car.findUnique({
    where: {
      id
    }
  });
  return response;
}

export { insertCar, getCars, getCar };