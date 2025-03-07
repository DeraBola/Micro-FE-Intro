/// <reference types="react" />

declare module "cart/cart" {
    const Cart: React.ComponentType;
    export default Cart;
  }

declare module "cart/MiniCart" {
    const MiniCart: React.ComponentType;
    export default MiniCart;
  }
  
  declare module "cart/Login" {
    const Login: React.ComponentType;
    export default Login;
  }

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
  
  
  