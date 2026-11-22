export type ProductCategory =
  | 'soins-capillaires'
  | 'perruques-meches';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: ProductCategory;
  category_name: string;
  price: number; // In FCFA
  sale_price?: number | null;
  images: string[];
  stock_quantity: number;
  is_featured: boolean;
  is_new: boolean;
  is_active: boolean;
  benefits?: string[];
  usage?: string;
  volume_or_size?: string;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PaymentMethod = 'cod' | 'wave' | 'orange_money' | 'mtn_money';

export interface CheckoutFormData {
  customerName: string;
  customerPhone: string;
  customerCity: string;
  customerAddress: string;
  deliveryNotes?: string;
  paymentMethod: PaymentMethod;
}

export interface OrderRecord {
  id: string;
  order_ref: string;
  customer_name: string;
  customer_phone: string;
  customer_city: string;
  customer_address: string;
  delivery_notes?: string;
  payment_method: string;
  items: {
    product_id: string;
    product_name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  delivery_fee: number;
  total: number;
  status: 'pending_whatsapp_confirmation' | 'confirmed' | 'delivered';
  created_at: string;
}
