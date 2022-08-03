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
    <div className="input-group mb-3">
      <input className="form-control" value={currentItem} placeholder="Add new ToDo..." onChange={handleInputChange} />
      <button className="btn btn-warning" onClick={handleAddToList}>Add</button>
    </div>
     <ListItems itemList={itemList} updateItemList={updateItemList} />
     </div>
  );
}
