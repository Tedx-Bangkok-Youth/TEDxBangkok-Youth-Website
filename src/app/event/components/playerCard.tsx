import React from "react";

interface PlayerCardProps {
  imageUrl: string;
  text: string;
  altText?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ 
  imageUrl, 
  text, 
  altText = "Player" 
}) => {
  return (
    <div className="bg-white overflow-hidden transition-shadow flex flex-col gap-8 w-72">
      <img
      src={imageUrl}
      alt={altText}
      className="w-full h-48 object-cover rounded-xl"
      />
      <div className=" text-gray-800 w-full max-w-sm">{text}</div>
    </div>
  );
};

export default PlayerCard;