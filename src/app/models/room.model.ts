export interface Room {
  id: string;
  name: string;
  type: 'Single' | 'Double' | 'Suite';
  price: number;
  available: boolean;
}