import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/sales';

export const getAll = async (furnitureId) => {
    const query = encodeURIComponent(`furnitureId="${furnitureId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};