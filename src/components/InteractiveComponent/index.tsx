import { useState } from "react";

import "./index.css";
import HeartIcon from "./heart.svg";
import HeartIconLiked from "./heartLiked.svg";

export function InteractiveComponent() {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((state) => !state);
  };

  return (
    <div>
      <button onClick={toggleLiked}>
        <img src={liked ? HeartIconLiked : HeartIcon} alt="" />
      </button>
    </div>
  );
}
