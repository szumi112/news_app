import { categoryKeywords } from "../consts/categories";

export function categorizeTitle(title: string): string {
  title = title.toLowerCase();
  let bestCategory = "Other";
  let maxMatches = 0;

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    let matches = 0;
    for (const keyword of keywords) {
      if (title.includes(keyword.toLowerCase())) {
        matches += 1;
      }
    }

    if (matches > maxMatches) {
      maxMatches = matches;
      bestCategory = category;
    }
  }

  return bestCategory;
}
