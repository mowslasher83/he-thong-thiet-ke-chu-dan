declare module 'he-thong-thiet-ke-chu-dan' {
  export interface ButtonProps {
    variant: string;
    children: React.ReactNode;
  }

  export const Button: React.FC<ButtonProps>;
}