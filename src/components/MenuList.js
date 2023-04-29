import MenuListItem from './MenuListItem'

const MenuList = ({difficulty, onItemClick}) => {
  return (
    <div className='list'>
        <MenuListItem onClick={onItemClick} difficulty="Low" isSelected={difficulty === "Low"}/>
        <MenuListItem onClick={onItemClick} difficulty="Medium" isSelected={difficulty === "Medium"}/>
        <MenuListItem onClick={onItemClick} difficulty="High" isSelected={difficulty === "High"}/>
        <MenuListItem onClick={onItemClick} difficulty="Insane" isSelected={difficulty === "Insane"}/>
    </div>
  )
}

export default MenuList