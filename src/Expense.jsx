import { useState } from 'react'

function Expense() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function Outcome(event) {
    event.preventDefault();

    const [OutcomeResult] = useState(0);
    OutcomeResult = income - expense;
  }

  return (
  <main>
    <header>
      <h1>Enter and Track your expenses down below</h1>
      <p>ExpenseTracker is not held accountable for any decisions made by you regarding your monetary income.</p>
    </header>
    
    <section className='Values'>
      <form onSubmit="">
        <label htmlFor="">Add monthly income</label>
        <input
          type="text"
          id='income'
          value={income}
          onSubmit={event => setIncome(event.target.value)}
        />
        <button type='submit'>Add</button>

        <label htmlFor="">Add monthly expenses</label>
        <input
          type="text"
          id='expenses'
          value={expense}
          onSubmit={event => setExpense(event.target.value)}
        />
        <button type='submit'>Add</button>
        <button type='submit' onSubmit={Outcome}>Calculate</button>
      </form>
      <h4>{income} - {expense}</h4>
    </section>
    <section className=''>
      <h3>Your final outcome is:</h3>
      <h4>{OutcomeResult}</h4>
    </section>
  </main>  
  )
}

export default Expense
