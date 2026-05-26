import React from "react";
import { ExpenseTrackerTypes } from "../types/ExpenseTrackerType";

interface Props {
  expenses: ExpenseTrackerTypes[];
  onEdit: (expense: ExpenseTrackerTypes) => void;
  onDelete: (id: string) => void;
  onView: (expense: ExpenseTrackerTypes) => void;
}

const ExpenseTrackerList: React.FC<Props> = ({
  expenses,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-amber-300">
        <tr>
          <th className="p-3 border">Sr.No.</th>
          <th className="p-3 border">Title</th>
          <th className="p-3 border">Amount</th>
          <th className="p-3 border">Category</th>
          <th className="p-3 border">Actions</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((item, idx) => (
          <tr key={item.id} className="text-center bg-white hover:bg-gray-50">
            <td className="p-3 border">{idx + 1}</td>
            <td className="p-3 border">{item.title}</td>
            <td className="p-3 border">₹ {item.amount}</td>
            <td className="p-3 border">{item.category}</td>

            <td className="p-3 border">
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 cursor-pointer py-1 rounded bg-blue-500 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  className="px-3 cursor-pointer py-1 rounded bg-red-500 text-white"
                >
                  Delete
                </button>

                <button
                  onClick={() => onView(item)}
                  className="px-3 cursor-pointer py-1 rounded bg-green-500 text-white"
                >
                  View
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTrackerList;
