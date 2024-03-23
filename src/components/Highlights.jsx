import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import { rightImg, watchImg } from '../utils';
import VideoCarosuel from './VideoCarosuel';


const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0,
    })
    gsap.to('.link',{
       opacity:1,
      y:0,
      stagger:0.25
    })
  })
  return (
    <section id='highlights' className='w-screen overflow-hidden h-fullcommon-paddingbg-zinc' >
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>
    Get the Highlights.
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
<p className='link'>Watch the film
<img src={watchImg} alt="watch the film" className='ml-2'/></p>
<p className='link'>Watch the highlights
<img src={rightImg} alt="watch the film" className='ml-2'/></p>
          </div>
        </div>
        <VideoCarosuel/>

      </div>

    </section>
  )
}

export default Highlights