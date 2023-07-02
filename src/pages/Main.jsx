import { Link } from "react-router-dom";
import heroMain from "../assets/img/hero-main.png";

export default function Main() {
  return (
    <section>
      <div className="container flex-center">
        <div className="stained-text">
          <h1 className="hero-heading">BILIM JARYS</h1>
          <p>
            Наша задача - сделать практическую часть вашего развития более увлекательной как в играх
          </p>
          <p>Зарегистрируйся сегодня и получи - 1000 очков рейтинга!</p>
          <Link to="/tournaments">
            <button className="join">Исследовать</button>
          </Link>
        </div>
        <img src={heroMain} alt="hero-main" />
      </div>
    </section>
  );
}
