import { useState } from "react";

const MenuListItem = ({onClick, difficulty, isSelected}) => {
    const [isHovered, setIsHovered] = useState(false);

  function getBackgroundColor () {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }

  return (
    <div className="item" 
    onClick={() => onClick(difficulty)}
    style={{ backgroundColor: getBackgroundColor(), 
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        Set to : {difficulty}
    </div>
  );
}

export default MenuListItem