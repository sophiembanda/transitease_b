import "../../css/ticketingcss/ticketing.css";

const TpGotoPay = () => {
  function handlePay() {
    //Gets user mpesa number
    const a = prompt("Enter Mpesa Number");
  }

  return (
    <div className="tp-goto-pay flex-col">
      <section className="flex-col">
        <span>Number of Seats selected:3</span>
        <span>Price of one seat:KSH 300</span>

        <span>
          TOTAL PRICE: <em>KSH 900</em>{" "}
        </span>
      </section>
      <button onClick={handlePay}>Goto Pay</button>
    </div>
  );
};

export default TpGotoPay;
