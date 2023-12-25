import './category-item.styles.scss'

export const CategoryItem = ({category}) => {
    const {name, img} = category;
    return (
    <span className='category-container'>
        {name}
        <span className='background-image'>
        <img src = {img} alt = {`${name}`}></img>
        </span>

    </span>)
}