import apisauce from 'apisauce'

// define the api
const create = () => {
  const api = apisauce.create({
    baseURL: '',
  })

  // Orders
  const getItems = () => {
    return api.get();
  }

  const addItem = () => {
    return api.put();
  }

  const deleteItem = () => {
    return api.delete();
  }

  return {
    getItems,
    addItem,
    deleteItem,
  };
};

export default { create };
