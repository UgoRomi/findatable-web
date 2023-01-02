import { prisma } from 'database';
async function main() {
  const restaurants = await prisma.restaurant.findMany();
  for (const restaurant of restaurants) {
    console.log(restaurant.name);
  }
}
