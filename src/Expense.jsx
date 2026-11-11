import { useState } from 'react'

function Expense() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    rent: 0,
    groceries: 0,
    utilities: 0,
    subscriptions: 0,
    restaurant: 0
  });
  const [OutcomeResult, setOutcomeResult] = useState(0);

  function Outcome(event) {
    event.preventDefault();

    const totalExpenses = 
    expenses.rent +
    expenses.groceries + 
    expenses.utilities +
    expenses.subscriptions +
    expenses.restaurant;

    setOutcomeResult(income - totalExpenses);
  }

  return (
  <main>
    <header>
      <h1>Enter and Track your expenses down below</h1>
      <p>ExpenseTracker is not held accountable for any decisions made by you regarding your monetary income.</p>
    </header>
    
    <section className='Values'>
      <form onSubmit={Outcome}>
        <label htmlFor="">Add monthly income</label>
        <input
          type="number"
          id='income'
          value={income}
          onChange={event => setIncome(Number(event.target.value))}
        />
        <br />
          <label>Rent</label>
          <input
          type="number"
          value={expenses.rent}
          onChange={event => setExpenses({...expenses,rent: Number(event.target.value)})}
          />
        <br />
          <label>Groceries</label>
          <input
          type="number"
          value={expenses.groceries}
          onChange={event => setExpenses({...expenses,groceries: Number(event.target.value)})}
          />
        <br />
          <label>Utilities</label>
          <input
          type="number"
          value={expenses.utilities}
          onChange={event => setExpenses({...expenses,utilities: Number(event.target.value)})}
          />
        <br />
          <label>Subscriptions</label>
          <input
          type="number"
          value={expenses.subscriptions}
          onChange={event => setExpenses({...expenses,subscriptions: Number(event.target.value)})}
          />
        <br />
          <label>Restaurant</label>
          <input
          type="number"
          value={expenses.restaurant}
          onChange={event => setExpenses({...expenses,restaurant: Number(event.target.value)})}
          />
        <br />
        <button type='submit'>Calculate</button>
      </form>
      <h4>  
        {income} - {expenses.rent} - {expenses.groceries} -
        {expenses.utilities} - {expenses.subscriptions} -
        {expenses.restaurant}
      </h4>
      <h4>
        
      </h4>
    </section>
    <section className=''>
      <h3>Your final outcome is:</h3>
      <h4>{OutcomeResult}</h4>
    </section>
  </main>  
  )
}

export default Expense
