export type WorkCategory = 'art' | 'graphic';

export interface Work {
  id: number;
  title: string;
  category: WorkCategory;
  type: string;
  color: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: 'Тихий портрет',
    category: 'art',
    type: 'Живопись',
    color: '#d8c8b8',
  },
  {
    id: 2,
    title: 'Форма и свет',
    category: 'art',
    type: 'Графика',
    color: '#c8b8a8',
  },
  {
    id: 3,
    title: 'Ботаника',
    category: 'art',
    type: 'Акварель',
    color: '#ddd4c8',
  },
  {
    id: 4,
    title: 'Maison',
    category: 'graphic',
    type: 'Айдентика',
    color: '#cdb8a8',
  },
  {
    id: 5,
    title: 'Forma',
    category: 'graphic',
    type: 'Брендинг',
    color: '#d8d0c5',
  },
  {
    id: 6,
    title: 'The Exhibition',
    category: 'graphic',
    type: 'Плакат',
    color: '#c7b5a5',
  },
];