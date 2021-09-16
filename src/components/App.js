import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [items, setItems] = useState([]);
const [input, setInput] = useState("")

const [toggle, setToggle] = useState(false)

useEffect(() => {
  fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then(data => {
    setItems(data)
});
},[toggle]);

function handleDelete(id) {
  // delete backend
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
  }})
  .then(
  setToggle(!toggle)
  )
}

const results = (items.filter (item => input === "" || item.description.toLowerCase().includes(input.toLowerCase()) ))


function handleSubmit(e) {
  e.preventDefault(); 
  
//         step1: is this true or false, if false continue     take each item, set to lowercase, check true or false on input val, generate truths
  setItems(results)
}
// console.log(items)//now an array with id, description, image, location

return (
<div className="app">
  <Header input={input} 
  setInput={setInput} 
  handleSubmit={handleSubmit} 
  setItems={setItems} 
  items={items}/>
  <ListingsContainer 
  setItems={setItems} 
  items={results} 
  handleDelete={handleDelete} />
</div>
);
}

export default App;
