import API from "../services/api";

const api = API.create();

let items = [
  {name:'Beer'},
  {name:'Cofee'},
  {name:'More beer'},
];

export function getItems() {
  return api.getItems().then(response => {
    return items;
  });
}

export function addItem(itemName) {
  return api.addItem(itemName).then(response => {
    let item = {name: itemName};
    items.push(item);
    return items;
  });
}

export function deleteItem(index) {
  return api.deleteItem(index).then(response => {
    items.splice(index, 1);
    return items;
  });
}
