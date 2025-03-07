declare module "cart/cart" {
  export const cart: import("rxjs").BehaviorSubject<any>;
  export const clearCart: () => Promise<void>;
  export const addToCart: (id: any) => Promise<void>;
  export const getCart: () => Promise<any>;
  export function useLoggedIn(): boolean;
  export const jwt: import("rxjs").BehaviorSubject<string | null>;
}

declare module "cart/Login" {
  const Login: React.ComponentType;
  export default Login;
}

declare module "cart/MiniCart" {
  const MiniCart: React.ComponentType;
  export default MiniCart;
}

declare module "cart/CartContent" {
  const CartContent: React.ComponentType;
  export default CartContent;
}

declare module "home/Header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "home/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "home/products" {
  export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }

  export const getProducts: () => Promise<Product[]>;
  export const getProductById: (id: number) => Promise<Product>;
  export const currency: Intl.NumberFormat; // ✅ Correctly typed currency formatter
}
