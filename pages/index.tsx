import Head from "next/head";
import { useEffect, useState } from "react";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Home({ data }:any) {
  const [formData, setFormData] = useState({});
  const [user, setuser] = useState(data);

  const handleInputs = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveUser = async (e: any) => {
    e.preventDefault();
    setuser([...user , formData])
    const response = await fetch('/api/addUser', {
      method: 'POST',
      body: JSON.stringify(formData)
  })
  
  return await response.json()
  };


  return (
    <>
      <Head>
        <title>Next JS Prisma</title>
      </Head>
      <div className="mb-6 p-6">
        {user.map((item: any) => (
          <li key={item.id}>
            <span>
              <strong>{item.name}</strong>
            </span>
            <span> {item.email}</span>
          </li>
        ))}
      </div>

      <form onSubmit={saveUser}>
        <div className="mb-6 p-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
            value={data.name}
            required
            onChange={handleInputs}
          ></input>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={data.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@nextjs_prisma.com"
            required
            onChange={handleInputs}
          ></input>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export async function getServerSideProps() {
  const user = await prisma.user.findMany();

  // const data = [
  //   {
  //     id: 1,
  //     title: "Title",
  //   },
  //   {
  //     id: 2,
  //     title: "Title 2",
  //   },
  //   {
  //     id: 2,
  //     title: "Title 3",
  //   },
  // ];
  return {
    props: {
      data: user,
    },
  };
}
