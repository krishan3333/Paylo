import React, { useState } from 'react';
import Modal from './ui/modal';
import TransactionForm from '../transaction-form';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (data: any) => void;
}

const AddTransactionModal = ({ isOpen, onClose, onAddTransaction }: AddTransactionModalProps) => {
  const handleAddTransaction = (data: any) => {
    onAddTransaction(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <TransactionForm onSubmit={handleAddTransaction} />
    </Modal>
  );
};

export default AddTransactionModal;
