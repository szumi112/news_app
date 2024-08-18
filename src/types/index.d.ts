export interface Article {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  category: string;
}

export interface OpenNewsArticle {
  title: string;
  url: string;
  publishedAt: string;
  category?: string;
}

export interface GuardianArticleFields {
  trailText?: string;
  bodyText?: string;
}

export interface GuardianArticle {
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: GuardianArticleFields;
  url: string;
  category?: string;
}

export interface NYTArticle {
  title: string;
  abstract: string;
  url: string;
  published_date: string;
  category?: string;
}
