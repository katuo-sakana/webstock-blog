export type BlogListType = {
  id: string;
  title: string;
};

export type BlogType = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: { name: string };
};
