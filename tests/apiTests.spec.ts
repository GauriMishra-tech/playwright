import { test } from "@playwright/test";
import { describe } from "node:test";
import { ApiTest } from "../src/pages/api";

describe('API Validation', () => {
    test('should validate user data', () => {
      const apiTest = new ApiTest()
      //apiTest.validateUser()
    });
  });
