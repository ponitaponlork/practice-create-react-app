function Receipt() {
  const name = "Coffee";
  const qty = 2;
  const price = 2.50;

  const total = qty * price;

  return (
    <div>
      <h2>My Shop</h2>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <hr />

      <p>{name} x{qty}</p>
      <p>${total.toFixed(2)}</p>

      <hr />
      <h3>Total: ${total.toFixed(2)}</h3>

      <p>Thank you!</p>
    </div>
  );
}

export default Receipt;
