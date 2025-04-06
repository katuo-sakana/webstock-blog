import { client } from '@/libs/microcms';
import { BlogListType, BlogType } from '../types';

/**
 * ブログ記事の一覧を取得する
 * @returns ブログ記事の一覧
 */
export const getBlogPosts = async (): Promise<BlogListType[]> => {
  const data = await client.get({
    endpoint: 'blog', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title', // idとtitleを取得
      limit: 5, // 最新の5件を取得
    },
  });
  return data.contents;
};

/**
 * ブログ記事の詳細を取得する
 * @param id ブログ記事のID
 * @returns ブログ記事の詳細
 */
export const getBlogPost = async (id: string): Promise<BlogType> => {
  const data = await client.get({
    endpoint: `blog/${id}`,
  });
  return data;
};
