import { test } from "@playwright/test";
import { ApiTest } from "../src/pages/api";

test.describe('API Validation', () => {
    test('should validate user data', () => {
      const apiTest = new ApiTest()
      //apiTest.validateUser()
    });
  });
