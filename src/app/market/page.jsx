'use client'
import React from 'react'
import ProductList from '@/components/market/ProductList'
import HeaderSection from '@/components/ui/HeaderSection/HeaderSection'
import headerImg from '../../../public/images/market/General-Dentists 1.png'
const marketPage = () => {
  return (
    <div className=''>
      <HeaderSection imgURL="/images/market/General-Dentists%201.png" textDir='center' title="you Know and Trust" subtitle='All the Brands' />
      <ProductList />
    </div>
  )
}

export default marketPage