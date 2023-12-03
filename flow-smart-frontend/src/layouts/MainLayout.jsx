import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
// import "../styles/main.css"; // Import the CSS styles

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <Container fluid className="px-0">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="content-area flex-grow">{children}</main>
      </div>
      <Footer />
    </Container>
  );
}

export default MainLayout;
