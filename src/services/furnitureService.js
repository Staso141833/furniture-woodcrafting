import { requestFactory } from "./requester.js";

const baseUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3030'
: 'http://localhost:3031';
const url = `${baseUrl}/data/furnitures`;

export const furnitureServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(url);
    const furnitures = Object.values(result);

    return furnitures;
  };

  const getOne = async (furnitureId) => {
    const result = await request.get(`${url}/${furnitureId}`);

    return result;
  };

  const create = async (furnitureData) => {
    const result = await request.post(url, furnitureData);

    return result;
  };

  const edit = (furnitureId, data) => {
    return request.put(`${url}/${furnitureId}`, data);
  };

  const deleteFurniture = (furnitureId) =>
    request.delete(`${url}/${furnitureId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteFurniture,
  };
};
