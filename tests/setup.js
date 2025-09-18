import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";

// 👇 Alias jest → vi for compatibility
globalThis.jest = vi;

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
