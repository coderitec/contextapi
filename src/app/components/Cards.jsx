import React from 'react'
import AddCard from './AddCard'

const data = [
    {
        title:'html',
        amount: 400
    },
    {
        title:'css',
        amount: 900
    },
    {
        title:'javascript',
        amount: 1400
    },
    {
        title:'react',
        amount: 2100
    }
]
export default function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 uppercase grid-rows-[300px_300px] bg-slate-400'>
        {data.map((datum, index) => (
            <section key={index} className='rounded-md shadow-lg bg-gray-300 p-12 flex flex-col items-center justify-between'>
                <h2 className='font-semibold text-2xl'>{datum.title}</h2>
                <p>&#8358;{datum.amount}</p>
                <AddCard title={datum.title} amount ={datum.amount}/>
            </section>
        ))}
    </div>
  )
}
