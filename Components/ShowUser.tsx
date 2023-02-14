const ShowUser = ({ data }: any) => {
  const src =
    "data:image/png;base64,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";

  return (
    <>
      <div className="p-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item: any) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={src}
                    alt="Jese image"
                  ></img>
                  <div className="pl-3">
                    <div className="text-base font-semibold">{item.name}</div>
                    <div className="font-normal text-gray-500">
                      {item.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.position}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Online
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowUser;
