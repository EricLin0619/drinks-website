function SalesTable(props: any) {
  let avenue = 0;
  return (
    <div className="rounded-md shadow-md p-6">
      <p className="text-black font-bold text-xl mb-2">{props.time}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black text-lg">
              <th>品名</th>
              <th>價錢</th>
              <th>數量</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {props.drinks.map((item) => {
              avenue += item.price * item.amount;
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <p className="text-black font-bold mt-4 text-xl">總計：</p>
        <p className="text-black font-bold mt-4 text-xl ml-auto">$ {avenue}</p>
      </div>
    </div>
  );
}

export default SalesTable;
