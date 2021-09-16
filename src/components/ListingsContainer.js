import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const {items, handleDelete} = props;


  const singleItem = items.map((item) => (
  <ListingCard 
  key={item.id} 
  handleDelete={handleDelete} 
  id={item.id} 
  description={item.description} 
  image={item.image} 
  location={item.location} />
  )
  )
  return (
    <main>
      <ul className="cards">
        {singleItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;
