import { prismaClient } from "db/client";

async function Home() {
  const users = await prismaClient.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
}

export default Home;
