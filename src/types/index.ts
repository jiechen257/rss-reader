
// 定义 Feed 和 Item 接口
export interface Feed {
  id: number;
  url: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  id: number;
  title: string;
  description?: string;
  link: string;
  pubDate: Date;
  feedId: number;
  createdAt: Date;
  updatedAt: Date;
}