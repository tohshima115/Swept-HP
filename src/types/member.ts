export interface Member {
  id: number;
  title: string; // 役職 (例: 代表, マネージャー)
  name: string; // 氏名
  nameEn: string; // ローマ字氏名
  imageUrl: string; // 画像URL
  social: {
    x?: string; // X (Twitter) のURL (オプション)
    // 他のSNSリンクも追加可能
  };
  bio: string; // 経歴
  thoughts: string; // 事業への想い
  slug: string;
} 