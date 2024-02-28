import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 max-auto mx-auto flex flex-col  justify-center w-full h-full'>
           <div>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
           </div>
           <div>
              <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vitae voluptatum quasi provident eaque a harum qui unde, aperiam excepturi itaque laudantium aliquid quo ex placeat quia expedita consequatur illum molestiae aspernatur adipisci earum obcaecati quibusdam! Molestias voluptates accusamus nobis exercitationem voluptatibus, est tempore illum consequuntur nulla voluptatum quae perferendis.</p>
              <br />
              <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam obcaecati. Consequuntur exercitationem nam vero inventore molestiae veniam culpa numquam possimus animi doloremque. Cumque ratione inventore nihil. Expedita nam itaque veniam accusantium autem consequatur. Quia officia eligendi non voluptates totam! Voluptates earum impedit veritatis neque doloremque eaque repudiandae tempore voluptatem?</p>
           </div>
          
        </div>
    </div>
  )
}

export default About