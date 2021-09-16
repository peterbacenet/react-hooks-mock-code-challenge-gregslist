import React, {useState} from "react";
import Search from "./Search";

function Header({items, setItems, handleSubmit, input, setInput}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      input={input} 
      setInput={setInput} 
      items={items} 
      handleSubmit={handleSubmit} 
      setItems={setItems} />
    </header>
  );
}

export default Header;
