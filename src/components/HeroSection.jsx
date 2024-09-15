import myImage from '../assets/karan.png'
import { TypeAnimation } from 'react-type-animation';
function HeroSection() {
  return (
    <div className="text-white flex items-center justify-center md:py-9 " id='HeroSection'>
      <div className="flex justify-around items-center gap-3 w-full md:px-10 py-3 md:py-10 px-7 pr-7  flex-col md:flex-row ">
        {/* left section */}
        <div className=" md:w-1/2 py-10  order-2 ">
          <div className="md:text-5xl text-3xl font-bold md:leading-15">
            Hii, I am <br/>Karan <span className='text-blue-500'>Goyal</span> <br/>
            <TypeAnimation
      sequence={[
       
        'I am Web Developer',
        1000, 
        'I am UI/UX Designer',
        1000,
        'I am Graphic Designer',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '0.8em' , color:'rgb(51, 153, 255)' }}
      repeat={Infinity}
    />
   
          </div>
          <div className='text-lg py-5'>
          With a passion for crafting dynamic and visually captivating digital experiences, I specialize in web development and graphic design. My expertise lies in creating intuitive and engaging websites that not only look stunning but also provide seamless user experiences. Additionally, I have developed a range of libraries to streamline and enhance development processes. Explore my portfolio to discover how my skills and creativity can bring your vision to life.
    </div>
    <button className=' btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://drive.google.com/file/d/1ICT-SJEg20hcZlK6hVHo7p7Qm-K8SGWk/view?usp=drive_link'>Download CV</a></button>

        </div>
        {/* right section */}
        <div className=" flex md:w-1/4 order-1 ">
         <div className='flex m-auto justify-center z-10 relative'>
         <img src={myImage} alt="My Image"  className='flex justify-center items-center rounded-full  min-h-80 z-10 shadow-xl shadow-blue-800 md:animate-bounce-custom' />

         </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
