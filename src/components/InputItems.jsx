import { useState } from "react";
import ListItems from "./ListItems";

export default function InputItems(e) {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);

  const handleInputChange = (e) => {
    return setCurrentItem(e.target.value);
  };

  const handleAddToList = () => {
    return updateItemList((prev) => [...prev, { item: currentItem, key: Date.now() }]);
  };

  return (
    <div>
      <input value={currentItem} placeholder="Add new..." onChange={handleInputChange} />
      <button onClick={handleAddToList}>Add</button>
      <ListItems itemList={itemList} updateItemList={updateItemList} />
    </div>
  );
}
