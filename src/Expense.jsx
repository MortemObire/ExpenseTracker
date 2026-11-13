import { useState, useEffect} from 'react'

function Expense() {

  const [income, setIncome] = useState(() => {
    return Number(localStorage.getItem('income')) || 0;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');

    return savedExpenses ? JSON.parse(savedExpenses) : {
      rent: 0,
      groceries: 0,
      utilities: 0,
      subscriptions: 0,
      restaurant: 0
    };
  });
  
  useEffect(() => {
    localStorage.setItem('income', income);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [income, expenses]);

    const totalExpenses = Object.values(expenses).reduce(
    (total, amount) => total + amount,
    0
  );

  const OutcomeResult = income - totalExpenses;

  const expenseNames = [
    { key: 'rent', label: 'Rent' },
    { key: 'groceries', label: 'Groceries' },
    { key: 'utilities', label: 'Utilities' },
    { key: 'subscriptions', label: 'Subscriptions' },
    { key: 'restaurant', label: 'Restaurant' }
  ];

  return (
  <main>
    <header>
      <h1>Enter and Track your expenses down below</h1>
      <p>ExpenseTracker is not held accountable for any decisions made by you regarding your monetary income.</p>
    </header>
    
    <section className='Values'>

        <label htmlFor="income">Add monthly income</label>

        <input
          type="number"
          id="income"
          value={income}
          onChange={event => setIncome(Number(event.target.value))}
        />

        {expenseNames.map((expense) => (
          <div key={expense.key}>
            <label htmlFor={expense.key}>
              {expense.label}
            </label>

            <input
              type="number"
              id={expense.key}
              value={expenses[expense.key]}
              onChange={event =>
                setExpenses({
                  ...expenses,
                  [expense.key]: Number(event.target.value)
                })
              }
            />
          </div>
        ))}

    </section>
    
    <section>
        <h3>Total expenses:</h3>
        <h4>{totalExpenses}</h4>

        <h3>Your final outcome is:</h3>
        <h4>{OutcomeResult}</h4>
    </section>
  </main>  
  )
}

export default Expense
