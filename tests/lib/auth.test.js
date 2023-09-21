const authService = require("../../src/lib/Auth")
const user = {
    name: "Ariful Islam",
    email: "ariful@example.com",
    password: "pass1234"
};


describe('Authentication system test', () => {
    it('should registation of a new user',  () => {
       
        try {
            const token =  authService.register(user.name, user.email, user.password);
       expect(token).toBeTruthy();
        } catch (error) {
            expect(error).toBe('error')
        }
       
    })

    it('should login as a user',  ()=>{
       try {
        const token =  authService.login(user.email, user.password);
        expect(typeof token).toBe("string")
        
       } catch (error) {
        expect(error.message).toBeTruthy()
       }
    })
    it('should provie wrong cradential', ()=>{
        const loginUser = {
            email: "ariful@example.com",
            password:  "pass12345"
        }
        
            authService.register(user.name, user.email, user.password)
            const token = authService.login(loginUser.email, loginUser.password)
            expect(token).rejects.toMatch('error')
        
    })
})