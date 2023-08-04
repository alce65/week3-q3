export type Task = {
  title: string;
  owner: string;
  isCompleted: boolean;
};

export type FullTask = {
  id: number;
  title: string;
  owner: string;
  isCompleted: boolean;
};
