import { Link } from "react-router-dom";

const Toy = ({toy}) => {
  const { _id, seller, toy_name, sub_category, price, quantity } = toy;

  return (
    <tbody>
      <tr>
        <td>{seller}</td>
        <td>{toy_name}</td>
        <td>{
          sub_category.map(c=><div key={c}>{c}</div>)
          }</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default Toy;
