import { test } from "@playwright/test";
import { ApiTest } from "../src/api/api";
import testData from "../src/testData/testData.json"

test.describe('API Validation', () => {
    test('should validate user data', async ({page}) => {
      const apiTest = new ApiTest(page)
      apiTest.validateUser(testData.user)
      apiTest.validateUserId(testData.user.id)
      apiTest.validateUserName(testData.user.name)
      apiTest.validateUserEmail(testData.user.email)
      apiTest.validateUserRole(testData.user.role)
    });
  });
