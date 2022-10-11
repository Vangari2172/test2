import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProduct = (props) => {
  console.log("props", props.editTable);
  const userDetails = useParams();
  const data = props.editTable.filter((elem) => elem.id === userDetails.id);
  const newdata = props.editTable.filter((elem) => elem.id !== userDetails.id);

  const navigate = useNavigate();

  const [pName, setPName] = useState(data[0].pName);
  const [pDes, setPDes] = useState(data[0].pDes);
  const [price, setPrice] = useState(data[0].price);
  const [quantity, setQuantity] = useState(data[0].quantity);

  console.log("data", data);

  const handleUpdate = (e) => {
    e.preventDefault();

    const arr = {
      id: data[0].id,
      pName: pName,
      pDes: pDes,
      price: price,
      quantity: quantity,
    };
    newdata.push(arr);
    console.log("arr", arr);
    props.setAdd(newdata);

    alert("Data updated successfully");
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleUpdate} className="row">
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Name"
            className="form-control"
            value={pName}
            onChange={(e) => setPName(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Description"
            className="form-control"
            value={pDes}
            onChange={(e) => setPDes(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            required
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            required
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
