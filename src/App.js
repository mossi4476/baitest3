import "./App.css";
import "./Reponsive.css";
import bg from "./images/bg.jpg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <img src={bg} />
      </div>
      <div className="content">
        <div className="content_title">
          <h2>Điểm khác biệt ở phòng khám chúng tôi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="content_icon">
          <div className="row_icon">
            <div className="icon">
              <img src={icon1} alt="icon1" />
              <span>Tư vấn miễn phí</span>
            </div>
            <div className="icon">
              <img src={icon2} alt="icon2" />
              <span>Giá cả phải chăng</span>
            </div>
          </div>
          <div className="row_icon">
            <div className="icon">
              <img src={icon3} alt="icon3" />
              <span>Bác sĩ chuyên môn giỏi</span>
            </div>
            <div className="icon">
              <img src={icon4} alt="icon4" />
              <span>Nhân viên chuyên nghiệp</span>
            </div>
          </div>
          <div className="row_icon">
            <div className="icon">
              <img src={icon5} alt="icon5" />
              <span>Phục vụ 24/7</span>
            </div>
            <div className="icon">
              <img src={icon6} alt="icon6" />
              <span>Hơn 5000 khách hàng hài lòng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
