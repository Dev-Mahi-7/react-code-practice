"use client";

import React, { useMemo, useState } from "react";

import { ExpenseTrackerTypes } from "./types/ExpenseTrackerType";
import { expeseData } from "./const/expenseData";

import ExpenseTrackerHeader from "./sections/ExpenseTrackerHeader";
import ExpenseTrackerList from "./sections/ExpenseTrackerList";
import MyContainer from "@/my-components/MyContainer";
import { toast } from "sonner";

const ExpenseTrackerContainer = () => {
  // Main Expenses State
  const [expenses, setExpenses] = useState<ExpenseTrackerTypes[]>(expeseData);

  // Search State
  const [search, setSearch] = useState("");

  // Category Filter State
  const [category, setCategory] = useState("All");

  // Price Filter State
  const [priceRange, setPriceRange] = useState("All");

  // Add Expense
  const addExpense = (newExpense: ExpenseTrackerTypes) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  // Filtered Expenses
  const filteredExpenses = useMemo(() => {
    let filtered = [...expenses];

    // Search By Title
    if (search.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Filter By Category
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Filter By Price Range
    if (priceRange !== "All") {
      filtered = filtered.filter((item) => {
        const amount = item.amount;

        switch (priceRange) {
          case "0-500":
            return amount >= 0 && amount <= 500;

          case "500-1000":
            return amount > 500 && amount <= 1000;

          case "1000-5000":
            return amount > 1000 && amount <= 5000;

          case "5000+":
            return amount > 5000;

          default:
            return true;
        }
      });
    }

    return filtered;
  }, [expenses, search, category, priceRange]);

  // Total Expense
  const totalExpense = filteredExpenses.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  // Delete Expense
  const handleDelete = (id: string) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));

    toast.success("Expense Deleted Successfully");
  };

  // Edit Expense
  const handleEdit = (expense: ExpenseTrackerTypes) => {
    toast.info(`Editing ${expense.title}`);
  };

  // View Expense
  const handleView = (expense: ExpenseTrackerTypes) => {
    toast.success(
      `${expense.title} | ₹${expense.amount} | ${expense.category}`,
    );
  };

  return (
    <div className="min-h-screen p-6">
      <MyContainer>
        {/* Header */}
        <ExpenseTrackerHeader
          addExpense={addExpense}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Total Expenses */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-gray-500 text-sm mb-2">Total Expenses</h3>

            <h2 className="text-3xl font-bold">₹ {totalExpense}</h2>
          </div>

          {/* Total Records */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-gray-500 text-sm mb-2">Total Records</h3>

            <h2 className="text-3xl font-bold">{filteredExpenses.length}</h2>
          </div>

          {/* Selected Category */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-gray-500 text-sm mb-2">Active Category</h3>

            <h2 className="text-3xl font-bold">{category}</h2>
          </div>
        </div>

        {/* Expense Table */}
        <div className="overflow-hidden">
          <ExpenseTrackerList
            expenses={filteredExpenses}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onView={handleView}
          />
        </div>
      </MyContainer>
    </div>
  );
};

export default ExpenseTrackerContainer;
