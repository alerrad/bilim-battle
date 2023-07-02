import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TournamentCard(props) {
  return (
    <Link to={"/tournaments/" + props.id}>
      <div className="card">
        <div className="flex-center">
          <img src={props.image} alt="tournament-mini" />
          <div className="tournament-info">
            <h3>{props.name}</h3>
            <ul>
              <li>
                <b>Prize: </b> 
                {props.prize}tg
              </li>
              <li>
                <b>Grade: </b> 
                {props.grade}
              </li>
              <li>
                <b>Date: </b> 
                {props.date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Props interface
TournamentCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  prize: PropTypes.number,
  grade: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};

export default TournamentCard;
