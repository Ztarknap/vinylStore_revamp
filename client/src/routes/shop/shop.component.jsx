import {getItemData} from '../../api/get_data.jsx'

export const Shop = () => {
    return (
        <div> 
        <div>
            shop
        </div>
        <div>
        <button onClick={getItemData}> get data</button>
        </div>
        </div>
    )
}