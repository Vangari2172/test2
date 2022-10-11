// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProduct = (props) => {
  console.log("props", props);
  const userDetails = useParams();

  //   const navigate = useNavigate();
  //   const [pName, setPName] = useState(props.editList[0].pName);
  //   const [pDes, setPDes] = useState(props.editList[0].pDes);
  //   const [price, setPrice] = useState(props.editList[0].price);
  //   const [quantity, setQuantity] = useState(props.editList[0].quantity);

  const data = props.table.filter((elem) => elem.id === userDetails.id);

  console.log("data", data);

  //   const handleUpdate = (e) => {
  //     e.preventDefault();

  //     const arr = {
  //       id: props.editList[0].id,
  //       pName: pName,
  //       pDes: pDes,
  //       price: price,
  //       quantity: quantity,
  //     };
  //     props.update(arr);
  //     //     dispatch(update_user(arr));
  //     //     alert("Data updated successfully");
  //     navigate("/");
  //   };
  return (
    <div className="container mt-5">
      <form className="row">
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Name"
            className="form-control"
            // value={pName}
            // onChange={(e) => setPName(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="text"
            required
            placeholder="Product Description"
            className="form-control"
            // value={pDes}
            // onChange={(e) => setPDes(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            required
            min="0"
            // value={price}
            // onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-6 mb-5">
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            required
            min="0"
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
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
