export interface Car {
  id: string;
  color: string;
  gas: 'gasoline' | 'electric' | 'hybrid';
  year: number;
  price: number;
  description: string;
}
