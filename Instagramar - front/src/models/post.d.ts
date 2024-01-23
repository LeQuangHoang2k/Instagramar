export interface Post {
  id: string;
  author: string;
  images: [string];
  timeStamp: Date;
  liked: number;
  caption: string;
  comments: [string];
}
