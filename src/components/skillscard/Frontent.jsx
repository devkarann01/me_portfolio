import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";



const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Frontend = () => {
  
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  const list =[
    {name:'html5' ,source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'},
    {name:'CSS' ,source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png'},
    {name:'js', source:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'},
    {name:'Bootstrap5', source:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png'},
    {name:'jQuery' , source:'https://play-lh.googleusercontent.com/u9O8p0hF6FMQp_hgoGwhq0zHeidQO2Jbe2t2z1o0RDh8gaoyEtHBZJ84SgZa3yQMkLA'},
    {name:'PHP', source:'https://pngimg.com/d/php_PNG34.png'},
    {name:'MySQL', source:'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png'},

  ]

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96  w-80 md:w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-indigo-900"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute m-auto inset-4 grid  place-content-center rounded-xl bg-slate-900 shadow-xl "
      >
      <div className="items-center flex m-auto justify-center text-white"> 
      <div className="text-3xl font-bold  md:mt-6">Web Development</div>
</div>
        <p
          style={{
            transform: "translateZ(50px)",
            display:"flex",
            flexWrap:'wrap'
          }}
          className="text-center text-2xl font-bold"
        >
         
          <div className="flex justify-center gap-3 flex-wrap mb-3 mt-5 px-5 ">
         

          {list.map(link => (
            <div key={link.name} className="text-base font-thin rounded-lg border-2 border-white px-2 py-2 flex gap-2  justify-center items-center text-white ">
          <img src={link.source} alt="photo"   className=' h-8 w-8z-10  '/>
          {link.name}
          </div>
                        
                        ))}



          </div>
        </p>
      </div>
    </motion.div>
  );
};

export default Frontend;