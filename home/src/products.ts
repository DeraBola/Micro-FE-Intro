const API_SERVER = "http://localhost:8080";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const getProducts = (): Promise<Product[]> =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id: number): Promise<Product> =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
