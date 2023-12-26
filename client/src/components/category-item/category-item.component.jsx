import './category-item.styles.scss'

export const CategoryItem = ({category}) => {
    const {name, img} = category;
    return (
    <div className='category-container'>
        
        <div className='background-image' style={{backgroundImage:`url(${img})`}}>
 
        </div>
        <div className='category-body-container'><h1>{name}</h1> </div>

    </div>)
}