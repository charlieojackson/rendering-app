
export interface Post {
  id: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'SSG: Statically Generated Post',
    content: 'This post is statically generated at build time. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    title: 'SSG: Statically Generated Post 2',
    content: 'This post is statically generated at build time. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    title: 'SSG: Statically Generated Post 3',
    content: 'This post is statically generated at build time. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    title: 'SSG: Statically Generated Post 4',
    content: 'This post is statically generated at build time. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
];
