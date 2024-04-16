const {createToken} = require('../utils/auth.util.ts');
const jwt = require("jsonwebtoken");

const testId = '123'
const testEmail = 'test@test.com'


test(' valid token is generated', () => {
    expect(jwt.verify(createToken(testId, testEmail), "RANDOM-TOKEN")).toBeTruthy();
})