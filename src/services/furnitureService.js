import * as request  from "./requester.js";


const baseUrl = 'http://localhost:3030/jsonstore/furnitures'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    const furnitures = Object.values(result);

    return furnitures;
    
}

export const create = async (furnitureData) => {
    const result = await request.post(baseUrl, furnitureData);

    return result;
}