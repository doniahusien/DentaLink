'use client'

import React from 'react'
import HeaderSection from '@/components/ui/HeaderSection/HeaderSection'
import img from '../../../public/images/patient/patientHeader.png'
const patientPage = () => {
  return (
    <div className=''>
    <HeaderSection imgURL='/images/patient/patientHeader.png' textDir='center' title="Appropriate Patients" subtitle='Let’s Find ' />
    <div className='flex flex-col gap-5 mt-10 px-16'>
      {/*
        dentalProducts.map(i => (
          <div key={i.category} className='flex flex-col mb-12'>
            <h1 className='text-4xl'>{i.category}</h1>
            <ProductList products={i.products} />
          </div>
        ))
  */}
    </div>
    
  </div>
  )
}

export default patientPage