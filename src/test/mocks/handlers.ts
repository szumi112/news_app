import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${
      import.meta.env.VITE_NYTIMES_KEY
    }`,
    () => {
      return HttpResponse.json(
        {
          articles: [
            {
              source: "OpenNews",
            },
          ],
        },
        { status: 200 }
      );
    }
  ),
];
