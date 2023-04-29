import MenuListItem from './MenuListItem'

const MenuList = ({difficulty, onItemClick}) => {

const DIFFICULTIES = ["Low", "Medium", "High", "Insane"];

  return (
    <div className='list'>
        {
          DIFFICULTIES.map((diff) => (
            <MenuListItem onClick={onItemClick} difficulty={diff} isSelected={difficulty === diff}/>
          ))
        }
        
    </div>
  )
}

export default MenuList