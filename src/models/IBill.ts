export interface IBill {
  id: string;
  title: string;
  value: number;
  isPaid: boolean;
  dueDate: Date;
  createdAt: Date;
} 