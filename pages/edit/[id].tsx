import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ID = ({data}:any) => {
  console.log(data)
  return (
    <>
      <form 
      // onSubmit={saveUser}
      >
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
            // onChange={handleInputs}
          ></input>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={data.email}
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@nextjs_prisma.com"
            required
            // onChange={handleInputs}
          ></input>
          
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Position
          </label>
           <input
            name="position"
            type="text"
            id="position"
            value={data.position}
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="developer"
            required
            // onChange={handleInputs}
          ></input>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-4 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
         
          {/* <Link href="/view"> */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium ml-4 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All
            </button>
          {/* </Link> */}
        </div>
      </form>
    </>
  )
}

export default ID

export async function getServerSideProps(context:any) {
  const id = context.query

  const data = await prisma.user.findUnique({
      where: {
          id: id
      }
  })

  return {
      props: {
          data
      }
  }
}