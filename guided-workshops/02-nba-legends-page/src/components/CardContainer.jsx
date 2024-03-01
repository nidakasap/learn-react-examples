import PlayerCard from "./PlayerCard";
import { data as players } from "../helper/data";
import { useState } from "react";

const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPlayers =
    searchTerm === ""
      ? players
      : players.filter((player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="main-container">
      <div className="search-area">
        <form action="">
          <input
            type="text"
            placeholder="Search player"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="card-list-container">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
