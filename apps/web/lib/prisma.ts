import {
  getPrisma,
  PrismaClient,
} from '@ugoromi/findatable-prisma-client/dist';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || getPrisma();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
