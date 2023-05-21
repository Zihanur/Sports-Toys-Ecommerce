import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  //const { _id, seller, toy_name, sub_category, price, quantity } = toy;

  return (
    <tbody>
      <tr>
        <td>{toy?.seller}</td>
        <td>{toy?.toy_name}</td>
        <td>
          {toy?.sub_category?.map((c) => (
            <div key={c}>{c}</div>
          ))}
        </td>
        <td>{toy?.price}</td>
        <td>{toy?.quantity}</td>
        <td>
          <Link to={`/toys/${toy?._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Toy;
