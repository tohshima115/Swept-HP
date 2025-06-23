// カテゴリーの型
export interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

// microCMSから返却されるデータのうち、コンテンツ部分の型
export interface News {
  id: string; // コンテンツID
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string; // 記事タイトル
  content: string; // 記事本文
  thumbnail?: { // アイキャッチ画像
    url: string;
    height: number;
    width: number;
  };
  category?: Category; // カテゴリー
}

// microCMSのリスト形式APIのレスポンス全体の型
export type NewsListResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
}; 