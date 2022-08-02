export default function ListItems({itemList, updateItemList}) {
  function deleteItemFromlist({ key }) {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  }

  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <li key={itemObj.key}>
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItemFromlist(itemObj)}>Del</button>
          </li>
        );
      })}
    </div>
  );
}
