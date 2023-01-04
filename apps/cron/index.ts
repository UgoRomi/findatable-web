import * as dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from 'database';
async function main() {
  const prisma = new PrismaClient();
  const restaurants = await prisma.restaurant.findMany();
  for (const restaurant of restaurants) {
    console.log(restaurant.name);
  }
}
main();
