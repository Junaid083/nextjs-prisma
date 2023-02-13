const ShowUser = ({ data }: any) => {
  return (
    <>
      <div className="mb-6 p-6">
        {data.map((item: any) => (
          <li key={item.id}>
            <span>
              <strong>{item.name}</strong>
            </span>
            <span> {item.email}</span>
          </li>
        ))}
      </div>
    </>
  );
};

export default ShowUser;
