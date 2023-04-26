import "./Main.scss";
import Header from "../../components/Header/Header";

export default function Main() {
  return (
    <>
      <section className="main">
        <div className="header-section">
          <Header />
        </div>
        <div className="img-box">
          <img alt="main-image1" src="https://ifh.cc/g/PNw6dB.jpg" />
          <img alt="main-image2" src="https://ifh.cc/g/YqN3wQ.jpg" />
          <img alt="main-image3" src="https://ifh.cc/g/YTa0XB.jpg" />
        </div>
      </section>
    </>
  );
}
