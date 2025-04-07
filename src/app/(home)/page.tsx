import { type Metadata } from 'next';
import React from 'react';

import Home from '@/feature/payment-tr/page/home';

export const metadata: Metadata = {
  title: 'Payment TR',
  description: 'Payment TR',
};

async function HomePage() {
  return (
    <Home />
  );
}

export default HomePage;