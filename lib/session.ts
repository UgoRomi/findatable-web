import { unstable_getServerSession } from 'next-auth/next';

export async function getSession() {
  return await unstable_getServerSession();
}

export async function getCurrentUser() {
  const session = await getSession();

  return session?.user;
}
