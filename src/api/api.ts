import { Page, expect } from '@playwright/test';
export class ApiTest{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async validateUser(user: any){
        expect(user, 'User object').toHaveProperty('id');
        expect(user, 'User object').toHaveProperty('name');
        expect(user, 'User object').toHaveProperty('email');
        expect(user, 'User object').toHaveProperty('role');
    }
    async validateUserId(id: number){
        expect(typeof id, 'Id should be a number').toBe('number');
    }
    async validateUserName(name: string){
        expect(typeof name, 'Name should be a string').toBe('string');
        expect(name.trim(), 'Name should not be empty').not.toBe('');
    }
    async validateUserEmail(email: string){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        expect(email, 'Email should have valid format').toMatch(emailRegex);
    }
    async validateUserRole(role: any){
        expect(Array.isArray(role), 'Role should be an array').toBeTruthy();
        expect(role.length, 'Atleat 1 Role exists').toBeGreaterThan(0);
    }
}