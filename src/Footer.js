function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open");
  // } else {
  //   alert("We are currently closed");
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open
    </footer>
  );
}
export default Footer;
