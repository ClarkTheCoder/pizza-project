function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <Order openHour={openHour} closeHour={closeHour} />
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00 - Come visit us, or order online.{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default Footer;
