import React from 'react'

const ProjectOverview = () => {
  return (
    <div>
      <div className=" border border-black rounded-md shadow-xl flex flex-col p-4">
        <div className=' flex justify-between'>
          <h1 className=" text-xl font-semibold text-[#07074D]">Project Overview</h1>
          <a href='#demo' className=' text-blue-600 hover:cursor-pointer'>Go to Demo</a>
        </div>
          <p className=' mt-4 text-justify'>
              This is the web demo for <strong className=' italic'>FASA (Flexible & Automatic Speech Aligner)</strong>. FASA is a force alignment toolkit that works robustly with noisy transcriptions. Similar to existing auto-alignment toolkits, FASA requires an audio file and a transcription associated with the audio file. However, due to the high uncertainly in raw dataset, FASA assumes only minimum format from the input. You need to prepare an audio file in the format of mp3 or wav, and a transcription made of some characters in a txt file.
              This web demo only operates the two required modules described in the paper. For a fully controllable and flexible software, please visit <a href="https://github.com/DanchengLiu/FASA" target='_blank' className=' text-blue-600'>https://github.com/DanchengLiu/FASA</a>.
          </p>
          <img src="./FASA_pipeline.png" className=""/>
      </div>

      {/* <div className=" border border-black rounded-md p-4 bg-white shadow-xl" >
        <img src="./FASA_pipeline.png" className=""/>
      </div> */}
    </div>
  )
}

export default ProjectOverview;