import { useState } from "react";
import { ExpenseTrackerTypes } from "../types/ExpenseTrackerType";
import { v4 as uuidv4 } from "uuid";

interface Props {
  close: () => void;

  addExpense: (expense: ExpenseTrackerTypes) => void;
}

const AddExpenseForm: React.FC<Props> = ({ close, addExpense }) => {
  const [data, setData] = useState<ExpenseTrackerTypes>({
    id: uuidv4(),
    title: "",
    amount: 0,
    category: "",
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!data.title || !data.amount || !data.category) {
      alert("Please fill all fields");
      return;
    }

    // Add Expense
    addExpense(data);

    // Reset Form
    setData({
      id: uuidv4(),
      title: "",
      amount: 0,
      category: "",
    });

    // Close Modal
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6 mx-4">
        <h2 className="text-2xl font-bold mb-6">Add Expense</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">Expense Title</label>

            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Enter expense title"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-2 font-medium">Amount</label>

            <input
              type="number"
              name="amount"
              value={data.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">Category</label>

            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Category</option>

              <option value="Food">Food</option>

              <option value="Travel">Travel</option>

              <option value="Shopping">Shopping</option>

              <option value="Bills">Bills</option>

              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add Expense
            </button>

            <button
              type="button"
              onClick={close}
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
