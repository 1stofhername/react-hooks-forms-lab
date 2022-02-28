import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const[itemName, setItemName]= useState("");
  const [itemCategory, setItemCategory]= useState('Produce');

  function onNameChange(event){
    setItemName(event.target.value);
    console.log(itemName)
  }

  function onCategoryChange(event){
    setItemCategory(event.target.value);
    console.log(itemCategory);
  }
  
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  }

  function onSubmit (event){
    event.preventDefault();
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
