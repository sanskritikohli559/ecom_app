import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p className='text-gray-400'>We believe shopping should be simple, enjoyable, and accessible to everyone. Our platform brings together carefully selected products that combine quality, affordability, and modern design, helping you discover items that perfectly suit your lifestyle.</p>
            <p className='text-gray-400'>Every product in our collection is chosen with customer satisfaction in mind. From secure payments and fast delivery to responsive customer support, we're committed to providing a seamless shopping experience that you can trust every step of the way.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p className='text-gray-400'>Whether you're searching for the latest trends or timeless essentials, our goal is to provide a reliable shopping experience with secure transactions, prompt delivery, and dedicated customer support.</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'}  text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At our store, quality is more than a promise—it's our commitment. Every product is carefully evaluated and sourced from trusted manufacturers who meet our high standards for craftsmanship, durability, and performance. We believe our customers deserve products they can rely on every day.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convinience:</b>
            <p className='text-gray-600'>We are passionate about connecting people with products that inspire confidence, comfort, and everyday convenience. Our carefully curated collection reflects quality, style, and exceptional value.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We believe that great products deserve equally great service. Our dedicated support team is always ready to assist you with your questions, orders, and concerns, ensuring a smooth and hassle-free shopping experience from start to finish.</p>

          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
