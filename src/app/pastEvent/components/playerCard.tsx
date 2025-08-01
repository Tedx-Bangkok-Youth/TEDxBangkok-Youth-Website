import React from "react";

interface PlayerCardProps {
  imageUrl: string;
  text: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ imageUrl, text }) => {
  return (
    <div style={{borderRadius: 16, padding: 8, textAlign: "center", width: 220 }}>
      <img
        src={imageUrl}
        alt="Player"
        style={{ width: 245, height: 171, borderRadius: 8, objectFit: "cover", marginBottom: 16 }}
      />
      <div style={{ textAlign: "left", fontSize: 15, color: "#222" }}>{text}</div>
    </div>
  );
};

export default PlayerCard; 