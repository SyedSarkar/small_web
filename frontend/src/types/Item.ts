export interface Item {
  _id: string;
  title: string;
  description?: string;
  category: 'personal' | 'business' | 'hobby' | 'other';
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
