import { Sum } from "./Sum";

describe("Sum Tests", () => {
  it(" 10 + 20 = 30 ", () => {
    const result = Sum(10, 20);
    expect(result).toBe(30);
  });
});
