// Fix: Import React to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export type LabelType = 'Deal hot' | 'Bán chạy' | 'Giảm sâu';

export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  label: LabelType;
  category: string;
  affiliateUrl: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}
