import testData from "../testData/testData.json"
import { test, expect } from '@playwright/test';
export class ApiTest{
    validateUser(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        expect(testData.user, 'User object').to.have.property('id');
        expect(testData.user.id, 'Id should be a number').to.be.a('number');
        expect(testData.user, 'User object').to.have.property('name');
        expect(testData.user.name, 'Name should be a string').to.be.a('string');
        expect(testData.user.name.trim(), 'Name should not be empty').to.not.equal('');
        expect(testData.user, 'User object').to.have.property('email');
        expect(testData.user.email, 'Email should have valid format').to.match(emailRegex);
        expect(testData.user, 'User object').to.have.property('role');
        expect(testData.user.role, 'Role should be an array').to.be.an('array');
        expect(testData.user.role.length, 'Atleat 1 Role exists').to.be.greaterThan(0);
    }
}