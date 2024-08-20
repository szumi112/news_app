import { categorizeTitle } from "./categorize";

describe("categorizeTitle Utility", () => {
  it("should categorize a title correctly", () => {
    const title = "Apple releases new iPhone";
    const category = categorizeTitle(title);

    expect(category).toBe("Technology");
  });

  it("should handle an empty title", () => {
    const category = categorizeTitle("");

    expect(category).toBe("Other");
  });

  it("should handle an uncategorizable title", () => {
    const title = "Random news";
    const category = categorizeTitle(title);

    expect(category).toBe("Other");
  });
});
