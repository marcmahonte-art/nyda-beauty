-- ==============================================================================
-- NYDA BEAUTY HAIR — SUPABASE DATABASE SCHEMA
-- Version 1.0 · Novembre 2026
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::text,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  category_id TEXT NOT NULL CHECK (category_id IN ('cosmetiques', 'soins-capillaires', 'perruques-meches', 'accessoires')),
  category_name TEXT NOT NULL,
  price NUMERIC(12, 0) NOT NULL, -- Prix en FCFA (sans décimales)
  sale_price NUMERIC(12, 0) NULL,
  images TEXT[] NOT NULL DEFAULT '{}',
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_new BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  benefits TEXT[] DEFAULT '{}',
  usage TEXT DEFAULT '',
  volume_or_size TEXT DEFAULT '',
  rating NUMERIC(2, 1) DEFAULT 5.0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. ORDERS TABLE (WhatsApp e-commerce tracking)
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_ref TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  delivery_notes TEXT DEFAULT '',
  payment_method TEXT NOT NULL CHECK (payment_method IN ('cod', 'wave', 'orange_money', 'mtn_money')),
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  subtotal NUMERIC(12, 0) NOT NULL,
  delivery_fee NUMERIC(12, 0) NOT NULL DEFAULT 0,
  total NUMERIC(12, 0) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_whatsapp_confirmation' CHECK (status IN ('pending_whatsapp_confirmation', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read of active products
CREATE POLICY "Public read active products" ON public.products
  FOR SELECT USING (is_active = true);

-- Allow anonymous insertion of orders (from online checkout before WhatsApp redirect)
CREATE POLICY "Public insert orders" ON public.orders
  FOR INSERT WITH CHECK (true);

-- 5. INDEXES FOR SPEED
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(is_featured);
CREATE INDEX IF NOT EXISTS idx_orders_ref ON public.orders(order_ref);
CREATE INDEX IF NOT EXISTS idx_orders_created ON public.orders(created_at DESC);
