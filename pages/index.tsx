import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Next JS Prisma</title>
      </Head>

      {data.map((item: any) => (
        <li key={item.id}>
          <span>
            <strong>{item.title}</strong>
          </span>
          {/* <span>{item.year}</span> */}
          {/* <span>{item.description}</span> */}
        </li>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const data = [
    {
      id: 1,
      title: "Title",
    },
    {
      id: 2,
      title: "Title 2",
    },
    {
      id: 2,
      title: "Title 3",
    },
  ];

  return {
    props: {
      data,
    },
  };
}
