import "./listItems.css";

export default function ListItems({ itemList, updateItemList }) {

  function deleteItemFromlist({ key }) {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  }

  function doneItemFromlist() {
    
  }

  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <ul className="list-group">
            <li className="list-group-item mt-1" key={itemObj.key}>
              <span className="text-break checked-item">{itemObj.item}</span>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <input type="checkbox" className="form-check-input check-box" onChange={doneItemFromlist} />
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
