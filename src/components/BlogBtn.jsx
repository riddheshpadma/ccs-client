import React from 'react'

const BlogBtn = (props) => {
  return (
    <div>

      <button class="cursor-pointer font-semibold overflow-hidden relative z-100 active:scale-105 transform ease-in-out duration-100 rounded-lg border border-black group px-8 py-2">
        <span class="relative z-10 text-black group-hover:text-white  duration-500">{props.btn_context}</span>
        <span class="absolute w-full h-full bg-gray-900 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
        <span class="absolute w-full h-full bg-gray-900 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
      </button>
    </div>
  )
}

export default BlogBtn