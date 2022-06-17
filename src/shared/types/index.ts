export type Product = {
  title: string;
  price: number;
  image: string;
  id: number;
};

export type RootObject = {
  products: Product[];
};
