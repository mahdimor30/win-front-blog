import React from 'react';

import { Card } from '@/components/ui/card';
import arrow from '@/feature/payment-tr/assets/arrow.svg';

import Collapsible from '../../../components/collapsible';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  description: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <Collapsible textButton="تراکنش های من" srcIcon={arrow}>
      <div className="space-y-4 p-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{transaction.amount} {transaction.currency}</p>
                <p className="text-sm text-gray-500">{transaction.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{transaction.date}</p>
                <span className={`text-sm ${
                  transaction.status === 'completed' ? 'text-green-500' : 
                  transaction.status === 'failed' ? 'text-red-500' : 
                  'text-yellow-500'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Collapsible>
  );
};

export default TransactionList; 