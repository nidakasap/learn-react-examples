import { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [isClicked, setisClicked] = useState(true);

  const handleClick = () => {
    setisClicked(!isClicked);
  };

  return (
    <div className="player-card" onClick={handleClick}>
      <div className="card-backside">
        <div className="card-img-container">
          {/* {isClicked ? (
            <img src={img} alt="" />
          ) : (
            <div className="statistics-container">
              {statistics.map((stat, index) => (
                <p key={index} className="statistics-paragraph">
                  🏀{stat}
                </p>
              ))}
            </div>
          )} */}

          {isClicked && <img src={img} alt="" />}

          {!isClicked && (
            <div className="statistics-container">
              {statistics.map((stat, index) => (
                <p key={index} className="statistics-paragraph">
                  🏀{stat}
                </p>
              ))}
            </div>
          )}
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
