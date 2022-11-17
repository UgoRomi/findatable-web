import prisma from '@/lib/prismadb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const restaurants = await prisma.restaurant.findMany();
  return res.status(200).json(restaurants);
}
