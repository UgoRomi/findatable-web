import * as dotenv from 'dotenv';
dotenv.config();

import { prisma } from 'database';
async function main() {
  const restaurants = await prisma.restaurant.findMany();
  for (const restaurant of restaurants) {
    console.log(restaurant.name);
  }
}
main();
