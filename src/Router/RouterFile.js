import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Header from "../components/Header";
import Table from "../components/Table";

const RouterFile = () => {
  const [add, setAdd] = useState([]);

  const addData = (data) => {
    setAdd([...add, data]);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Table table={add} setAdd={setAdd} />
              </div>
            }
          />
          <Route exact path="/add" element={<AddProduct addData={addData} />} />
          <Route
            exact
            path="/edit/:id"
            element={<EditProduct editTable={add} setAdd={setAdd} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterFile;
