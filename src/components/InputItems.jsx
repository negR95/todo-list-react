import { useState } from "react";
import ListItems from "./ListItems";

export default function InputItems(e) {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const handleInputChange = (e) => {
    return setCurrentItem(e.target.value);
  };

  const handleAddToList = () => {
    return updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
  };

  return (
    <div>
      <input type="text" value={currentItem} placeholder="Add new..." onChange={handleInputChange}>
        {e.target.value}
      </input>
      <button onClick={handleAddToList}>Add</button>
      <ListItems itemList={itemList} updateItemList={updateItemList} />
    </div>
  );
}
