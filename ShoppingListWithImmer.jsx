import { useState } from "react";
import { useImmer } from "use-immer";

function ShoppingListWithImmer() {
  // inputs
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // state (array of items)
  const [list, updateList] = useImmer([
    { id: 1, name: "Milk", quantity: 1, details: { category: "Dairy", notes: "Low fat" } },
    { id: 2, name: "Apples", quantity: 4, details: { category: "Fruit", notes: "Red apples" } },
  ]);

  // add item
  const addItem = () => {
    if (!name.trim()) return;
    updateList(draft => {
      draft.push({
        id: Date.now(),
        name,
        quantity: Number(quantity),
        details: { category: "General", notes: "New item" },
      });
    });
    setName("");
    setQuantity(1);
  };

  // update item (shows "Updated with Immer")
  const updateItem = (id) => {
    updateList(draft => {
      const item = draft.find(i => i.id === id); 
      if (item) {
        item.quantity++;
        item.details.notes = "Updated with Immer";
      }
    });
  };

  // remove item
  const removeItem = (id) => {
    updateList(draft => {
      const index = draft.findIndex(i => i.id === id);
      if (index !== -1) draft.splice(index, 1);
    });
  };

  return (
    <div className="box">
      <h1>Shopping List</h1>

      {/* inputs */}
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Item" />
      <input type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={addItem}>Add</button>

      {/* list */}
      {list.map(item => (
        <div key={item.id}>
          <p>
            <strong>{item.name}</strong> - {item.quantity} - {item.details.notes}
          </p>
          <button onClick={() => updateItem(item.id)}>Update</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingListWithImmer;