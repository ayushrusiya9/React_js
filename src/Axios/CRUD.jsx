import React, { useEffect, useState } from "react";
import axios from "axios";

const CRUD = () => {
  const [Data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
    checkin: "",
    checkout: "",
    price: "",
    people: "",
    total: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch Data (GET)
  useEffect(() => {
    axios.get("http://localhost:3000/Hotel").then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle Delete
  const del = (id) => {
    axios.delete("http://localhost:3000/Hotel/" + id).then(() => {
        alert("Data Deleted Successfully");
        setData(Data.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const post = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/Hotel", form).then((res) => {
        alert("Data Added Successfully");
        setData([...Data, res.data]); 
        setForm({
          name: "",
          age: "",
          city: "",
          checkin: "",
          checkout: "",
          price: "",
          people: "",
          total: "",
        }); // clear form
      })
      .catch((err) => console.log(err));
  };


  const edit = (user) =>{
  }

  return (
    <>
      <h1>Hotel Data Management </h1>

      {/* Input Form */}
      <form onSubmit={post} style={{ marginBottom: "20px" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /> <br />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} /> <br />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} /> <br />
        <input name="checkin" placeholder="CheckIN" value={form.checkin} onChange={handleChange} /> <br />
        <input name="checkout" placeholder="CheckOut" value={form.checkout} onChange={handleChange} /> <br />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} /> <br />
        <input name="people" placeholder="People" value={form.people} onChange={handleChange} /> <br />
        <input name="total" placeholder="Total" value={form.total} onChange={handleChange} /> <br />
        <button type="submit">Add Data</button>
      </form>

      {/* Table */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>CheckIN</th>
            <th>CheckOut</th>
            <th>Price</th>
            <th>People</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.price}</td>
              <td>{e.people}</td>
              <td>{e.total}</td>
              <td>
                <button onClick={() => del(e.id)}>Delete</button>
                <button onClick={() =>edit(e)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CRUD;
