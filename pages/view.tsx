import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import DisplayTable from "../Components/DisplayTable";

const view = ({ data }: any) => {
  return <DisplayTable data={data} />;
};

export default view;

export async function getServerSideProps() {
  const user = await prisma.user.findMany();

  return {
    props: {
      data: user,
    },
  };
}
