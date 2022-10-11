import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Table = (props) => {
  const deleteHandler = (id) => {
    const newData = props.table.filter((data) => data.id !== id);
    props.setAdd(newData);
  };

  return (
    <div style={{ margin: "5px" }}>
      <table className="table striped mt-5">
        <thead>
          <tr className="table-secondary">
            <th>Sr No.</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price (Rs)</th>
            <th>Quantity (Pcs)</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.table.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.pName}</td>
                <td>{item.pDes}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <button
                      className="btn"
                      style={{ backgroundColor: "orangered", color: "white" }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandler(item.id)}
                    className="btn"
                    style={{ backgroundColor: "orangered", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
