import { requestFactory }from './requester.js';

const baseUrl = `http://localhost:3030/users`;


export const authServiceFactory = (token) => {

   const request = requestFactory(token);

      return {
         login : (data) => request.post(`${baseUrl}/login`, data),
         register : (data) => request.post(`${baseUrl}/register`, data),
         logout : (token) => request.get(`${baseUrl}/logout`),

         }
      
}


