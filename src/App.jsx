import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function AppLayout() {
  return (
    <div className="main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default AppLayout;
