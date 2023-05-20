import { Link } from "react-router-dom";

const MyToy = ({ toy }) => {
  const {
    _id,
    seller,
    toy_name,
    sub_category,
    price,
    rating,
    quantity,
    email,
    details,
  } = toy;

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/mytoys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tbody>
      <tr>
        <th>{seller}</th>
        <th>{toy_name}</th>
        <th>{sub_category}</th>
        <th>{price}</th>
        <th>{quantity}</th>
        <th>{email}</th>
        <th>{rating}</th>
        <th>{details}</th>
        <th>
          {/* Photo viev modal */}
          <label htmlFor="my-modal" className="btn">
            View
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <img src={toy?.img} alt="Toy image" />
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Ok
                </label>
              </div>
            </div>
          </div>
        </th>
        <td className="">
          <Link>
            <button className="btn btn-primary me-1">Edit</button>
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MyToy;
