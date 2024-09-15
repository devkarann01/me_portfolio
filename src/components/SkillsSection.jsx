import Frontend from "./skillscard/Frontent";
import Others from "./skillscard/Others";
import Backend from './skillscard/Backend'

const Example = () => {

 
  return (
    <section  id="SkillsSection" >

    {/* <div className="bg-gradient-to-br from-slate-900 to-violet-900 px-4 py-12" > */}
     <div >
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15 md:pt-9'>Skills</div>
      <div className='flex justify-center text-lg py-5 px-5 text-center'>Here are some of my skills on which I have been working on for the past 3 to 4  years</div>
    </div>
    <div className="flex  flex-wrap gap-4 w-full place-content-center  text-slate-900  relative md:pb-10">
      <Frontend  />
      <Backend/>
     <Others/>
    </div>
    {/* </div> */}
        </section>
  );
};



export default Example;