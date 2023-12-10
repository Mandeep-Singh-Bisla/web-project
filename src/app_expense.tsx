import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
function App() {
  const [selectCategory, setselectCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "a", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 11, category: "Groceries" },
    { id: 3, description: "c", amount: 14, category: "Entertainment" },
    { id: 4, description: "d", amount: 15, category: "Utilities" },
  ]);
  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category == selectCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(categories) => setselectCategory(categories)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id != id))}
      />
    </>
  );
}
export default App;
