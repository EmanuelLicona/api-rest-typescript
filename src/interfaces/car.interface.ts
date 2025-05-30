export interface Car {
  id: string;
  name: string;
  color: string;
  gas: 'gasoline' | 'electric' | 'hybrid';
  year: number;
  price: number;
  description?: string;
}
