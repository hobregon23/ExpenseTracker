import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title: "Toiler Paper", amount: 150.30, date: new Date(2023, 3, 15)},
    {title: "New TV", amount: 799.30, date: new Date(2023, 5, 21)},
    {title: "Car Insurance", amount: 35.45, date: new Date(2023, 7, 5)},
    {title: "New Desk (Wooden)", amount: 79.50, date: new Date(2023, 9, 13)},
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
