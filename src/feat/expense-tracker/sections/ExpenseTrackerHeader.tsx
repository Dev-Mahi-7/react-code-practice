"use client";

import React, { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import { ExpenseTrackerTypes } from "../types/ExpenseTrackerType";

interface Props {
  addExpense: (expense: ExpenseTrackerTypes) => void;

  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  priceRange: string;
  setPriceRange: (value: string) => void;
}

const ExpenseTrackerHeader: React.FC<Props> = ({
  addExpense,
  search,
  setSearch,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}) => {
  const [addExpenseModal, setAddExpenseModal] = useState(false);

  return (
    <>
      <div className=" bg-white shadow-md rounded-2xl p-5 mb-6">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <h1 className="text-3xl font-bold">Expense Tracker</h1>

          {/* Add Expense */}
          <button
            onClick={() => setAddExpenseModal(true)}
            className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            + Add Expense
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Search */}
          <div>
            <label className="block mb-2 font-medium">Search By Title</label>

            <input
              type="text"
              placeholder="Search expense..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block mb-2 font-medium">Filter By Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            >
              <option value="All">All Categories</option>

              <option value="Food">Food</option>

              <option value="Travel">Travel</option>

              <option value="Shopping">Shopping</option>

              <option value="Bills">Bills</option>

              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block mb-2 font-medium">Filter By Price</label>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
            >
              <option value="All">All Prices</option>

              <option value="0-500">₹0 - ₹500</option>

              <option value="500-1000">₹500 - ₹1000</option>

              <option value="1000-5000">₹1000 - ₹5000</option>

              <option value="5000+">₹5000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Modal */}
      {addExpenseModal && (
        <AddExpenseForm
          addExpense={addExpense}
          close={() => setAddExpenseModal(false)}
        />
      )}
    </>
  );
};

export default ExpenseTrackerHeader;
