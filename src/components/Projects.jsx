import Image from "../assets/THM.jpg"
import Image1 from "../assets/project_WKS.jpg"
import Image2 from "../assets/project_DM.jpg"
import Image3 from "../assets/project_LC.jpg"

import {motion} from 'framer-motion'


function Projects() {
    return (
        <div className="after:block after:absolute after:round-custom  after:w-2 after:h-full bg-indigo-950 pb-12 z-30 relative" id="Projects">
            <div>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative z-50 '>
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill fill-slate-950"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill fill-slate-950"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill fill-slate-950"></path>
                </svg>
            </div>



            <div className='py-10 '>
                <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Projects</div>
                <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects</div>
            </div>

            <motion.div
        // className=" text-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x:-50},
          visible: { opacity: 1,x:0 },
}}>
            <div className="flex  flex-wrap gap-4 w-full place-content-center  text-slate-900  z-20 relative">
                <div className=' h-72 relative max-w-xs overflow-hidden rounded-2xl shadow-lg '>
                    <img src={Image} alt='photo'
                        className=' h-72 transition-transform group-hover:scale-110 duration-200'
                    />
                    <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4'>
                            <div className='flex gap-4  py-4 '>
                                <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://thehealingmantra.com/'>Live Preview</a></button>
                                {/* <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button> */}
                            </div>
                        </div>



                    </div>
                </div>

                <div className='  h-72 relative max-w-xs overflow-hidden rounded-2xl shadow-lg '>
                    <img src={Image1} alt='photo'
                        className=' h-72 transition-transform group-hover:scale-110 duration-200'
                    />
                    <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4'>
                            <div className='flex gap-4 py-4'>
                                <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='http://webkesath.com/'>Live Preview</a></button>
                                {/* <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button> */}
                            </div>
                        </div>



                    </div>
                </div>


                <div className='relative max-w-xs   h-72 overflow-hidden rounded-2xl shadow-lg '>
                    <img src={Image2} alt='photo'
                        className='  h-72 transition-transform group-hover:scale-110 duration-200'
                    />
                    <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4'>
                            <div className='flex gap-4 py-4'>
                                <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg' ><a href='http://digimayank.com/'>Live Preview</a></button>
                                {/* <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button> */}
                            </div>
                        </div>



                    </div>
                </div>



                <div className='relative max-w-xs h-72 overflow-hidden rounded-2xl shadow-lg '>

                    <img src={Image3} alt='photo'
                        className=' h-72 transition-transform group-hover:scale-110 duration-200  '
                    />

                    <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div className='p-4'>
                            <div className='flex gap-4  py-4 '>
                                <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://devkarann01.github.io/learning-crypto/'>Live Preview</a></button>
                                {/* <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button> */}
                            </div>
                        </div>



                    </div>
                </div>





            </div>

</motion.div>
        </div>

    )
}

export default Projects