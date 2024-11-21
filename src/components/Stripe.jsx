import React from 'react'

const Stripe = ({data}) => {
  
 const {url,num} = data;
  return (
    <>
      <div className='flex w-[20%] justify-between items-center border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 py-5 px-4'>
      <img src={url} className="" alt="" />
      <h1 className='text-xl'>{num}</h1>
      </div>
    </>
  )
}

export default Stripe