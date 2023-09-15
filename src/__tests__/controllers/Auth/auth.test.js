import axios from 'axios';
const url = 'http://127.0.0.1:4000/api/v1'

    
describe('POST /auth/register', () => {
    test('Should create a new user', async () => {
     
   
      try {
        const res = await axios.post(`${url}/auth/register`, {
            name: "example",
            email: 'jane@email.com',
            password: 'Jane123'
          });
          expect(res.status).toBe(201);
          expect(res.message).toBe('Register Successfully')
            
        } catch (error) {
           
          if(error?.response){
              
            expect(error.response.status).toBe(400);      
            expect(message).toEqual('Invalid value')
            expect(error.message).toEqual(
              'Request failed with status code 400'
            )
          }
        }
    })
  })
  
describe("POST /auth/login", ()=>{
    test('Login a created User', async () => {
        try {
          await axios.post(`${url}/auth/login`, {
            email: 'john@email.com',
            password: 'john123'
          })
              
        } catch (error) {
         if(error?.response){
            expect(error.response.status).toBe(404)
            expect(error?.message).toEqual(
              'Request failed with status code 404'
            )
          }
         }
      })
})