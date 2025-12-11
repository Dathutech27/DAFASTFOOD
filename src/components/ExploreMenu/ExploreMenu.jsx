import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>khám phá thực đơn của chúng tôi</h1>
        <p className='explore-menu-text'>Thực đơn của chúng tôi cung cấp nhiều lựa chọn ngon miệng để thỏa mãn cơn thèm ăn của bạn. Từ các món khai vị đậm đà đến các món chính hấp dẫn và tráng miệng tuyệt hảo, có điều gì đó cho mọi người thưởng thức.</p>
        <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
