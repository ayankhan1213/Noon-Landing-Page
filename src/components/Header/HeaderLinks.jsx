import React from 'react'
import { Languages, CircleUser , Package, Heart, ShoppingCart } from 'lucide-react'

const HeaderLinks = [
  {
    id: 1,
    label: 'العربية',
    href: '/',
    icon: <Languages size={22} />
  },
  {
    id: 2,
    label: 'Log in',
    href: '/login',
    icon: <CircleUser  size={22} />
  },
  {
    id: 3,
    label: 'Orders',
    href: '/orders',
    icon: <Package size={22} />
  },
  {
    id: 4,
    label: 'Wishlist',
    href: '/wishlist',
    icon: <Heart size={22} />
  },
  {
    id: 5,
    label: 'Cart',
    href: '/cart',
    icon: <ShoppingCart size={22} />
  }
]

export default HeaderLinks
