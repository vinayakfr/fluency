import React from 'react'

interface TopicsProps {
    topic: string;
    hours: number;
}

const Topics = ({topic, hours}: TopicsProps) => {
  return (
    <div>
      <div className='relative flex flex-col border-[0.5px] border-white/10 gap-3 bg-white/15 backdrop-blur-md rounded-2xl p-2'>
        <h1 className='text-xl font-semibold text-white'>{topic}</h1>
        <p className='text-lg font-medium text-white'>{hours} hours left</p>
      </div>
    </div>
  )
}

export default Topics
