import "../style/components/TransactionHistory.css";

function TransactionHistory() {
  const transactionData = [
    {
      id: 1,
      timestamp: "20:10 - 30 June 2022",
      category: "Transfer",
      recipient: "Mega",
      details: "Fore Coffee",
      value: -75000,
    },
    {
      id: 2,
      timestamp: "20:10 - 30 June 2022",
      category: "Topup",
      recipient: "-",
      details: "Topup from Bank Transfer",
      value: 1000000,
    },
    {
      id: 3,
      timestamp: "20:10 - 30 June 2022",
      category: "Transfer",
      recipient: "Hasto",
      details: "Fore Coffee",
      value: -75000,
    },
    {
      id: 4,
      timestamp: "20:10 - 30 June 2022",
      category: "Topup",
      recipient: "-",
      details: "Topup from Pudidi",
      value: 1000000,
    },
    {
      id: 5,
      timestamp: "20:10 - 30 June 2022",
      category: "Transfer",
      recipient: "Bambang",
      details: "Beli Barang",
      value: -75000,
    },
  ];

  return (
    <div className="history-container">
      <div className="history-controls">
        <input type="text" placeholder="Search Transactions" />
        <div className="filter-options">
          <p>Show</p>
          <select>
            <option>Last 10 transactions</option>
            <option>Last 15 transactions</option>
          </select>
        </div>
        <div className="sorting-controls">
          <p>Sort By</p>
          <select>
            <option>Date</option>
            <option>Amount</option>
          </select>
          <select>
            <option>Descending</option>
            <option>Ascending</option>
          </select>
        </div>
      </div>
      <table className="transaction-history-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Category</th>
            <th>Recipient</th>
            <th>Details</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "row-even" : "row-odd"}
            >
              <td>{item.timestamp}</td>
              <td>{item.category}</td>
              <td>{item.recipient}</td>
              <td>{item.details}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button className="pagination-btn">First</button>
        <button className="pagination-btn">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
}

export default TransactionHistory;
