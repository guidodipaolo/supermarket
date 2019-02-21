import apisauce from 'apisauce'

// define the api
const create = () => {
  const api = apisauce.create({
    baseURL: `https://www.test.com/api/`,
  })

  // Orders
  const getItems = () => {
    let items = [
      {name:'Beer'},
      {name:'Cofee'},
      {name:'More beer'},
    ]
    return items;
  }

  return {
    getItems,
  };
};

export default { create };
