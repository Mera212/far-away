/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import "./App.css";
import PackingList from "./components/Packinglist";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items "
    );
    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItems={handleToggleItems}
          onClearList={clearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
