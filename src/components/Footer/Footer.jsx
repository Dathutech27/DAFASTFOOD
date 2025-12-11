import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Chúng tôi mang đến nền tảng đặt đồ ăn nhanh và tiện nhất, kết nối bạn với những quán ăn chất lượng chỉ trong vài thao tác. Mục tiêu của chúng tôi là giúp bạn thưởng thức món ngon mọi lúc, với tốc độ giao hàng ổn định và trải nghiệm mượt mà.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privary policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+356894178</li>
                    <li>contact@Tomato.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Designed  with love by Thành Đạt | Distributed by Thành Đạt</p>
    </div>
  )
}

export default Footer
