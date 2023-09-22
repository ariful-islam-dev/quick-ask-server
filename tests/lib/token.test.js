require('dotenv').config();
const { genJWTToken, verifyToken, decodeToken } = require("../../src/lib/token");
const payload = {
    name: 'Ariful Islam',
    email: 'ariful@gmail.com',
    role: 'user',
    id: 'abcd1234',
    status: "public"
}


describe("Access Token or JWT token tests", () => {
    it('Should Create an jwt token', () => {
  
        const  token = genJWTToken(payload, process.env.ACCESS_TOKEN_SECRETE);
        expect(typeof token).toBe('string');
    });

    it('should verfying the jwt token', ()=>{
        const  token = genJWTToken(payload, process.env.ACCESS_TOKEN_SECRETE);
        const verifyJWT = verifyToken(token, process.env.ACCESS_TOKEN_SECRETE);

        expect(verifyJWT).toBeTruthy();
        expect(verifyJWT.role).toBe('user');
        expect(verifyJWT.id).toBe('abcd1234')
    })
    it('should fail to verify an invalid JWT token', ()=>{
        const  token = '9asrlawoskrrseoiowrekawpafwrpark';
        const verifyJWT = decodeToken(token);
        expect(verifyJWT).toBeNull();
        expect(verifyJWT).toBeFalsy();
    })


})