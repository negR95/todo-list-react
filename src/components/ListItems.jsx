import { useState } from "react";
import "./listItems.css";

export default function ListItems({ itemList, updateItemList }) {
  const [isChecked, setIsChecked] = useState(false);

  function deleteItemFromlist({ key }) {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  }

  const handleChange = () => {
    setIsChecked(isChecked);
  };

  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <ul className="list-group">
            <li className="list-group-item mt-1" key={itemObj.key}>
              <span className="text-break checked-item">
                {itemObj.item} {isChecked ? (itemObj.item.style = { textDecoration: "line-through" }) : "not checked"}
              </span>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <input type="checkbox" className="form-check-input check-box" onChange={handleChange} />
                <button className="btn btn-danger btn-sm" onClick={() => deleteItemFromlist(itemObj)}>
                  Del
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
