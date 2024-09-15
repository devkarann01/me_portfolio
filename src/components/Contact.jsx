import {useForm} from 'react-hook-form'
import { Typography, Box, Container, createTheme } from "@mui/material";
import {motion} from 'framer-motion'
let theme = createTheme();


  
const Contact = () => {


  const {
    register,
    trigger,   //validation
    formState:{errors}   //errors
} =useForm();


const onSubmit=async(e)=>{
    const isValid=await trigger();

    if(!isValid){
        e.preventDefault(); //move to next page
    }
}

  return (
    <section  id='contact' className='py-8'>

      <Container maxWidth="lg"  id="contact"  >
      <motion.div
        initial="hidden"
        whileInView="visible"
         transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x:-50},
          visible: { opacity: 1,x:0 },
}}>
    <div className='py-10'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Contact Us </div>
      <div className='flex justify-center text-lg pt-5 z-20 text-center px-5'>Feel free to reach out for collaborations, inquiries, or more information about my work and services.</div>
    </div>
</motion.div>
    <motion.div
        className="md:w-1/3 text-center md:text-left m-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x:-50},
          visible: { opacity: 1,x:0 },
}}
      >
        <Box
          sx={{
            margin: "auto",
          
            width: 500,
            display: "flex",
            justifyContent: "center",
            border: "2px solid #fff",
            flexDirection: "column",
            borderRadius: "4px",
            [theme.breakpoints.down("sm")]: {
              width: 270,
             marginTop: "5px",
            }
          }}
        >
          <form 
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/87271d016e83c320133d2fc9f242df06"
            method="POST">
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
              }}
            >
              <label className="mt-4"
              >
                Name
              </label>
              <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-black"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            </Typography>
            <Typography
              sx={{
            
                display: "flex",
                flexDirection: "column",
                // textAlign: "center",
                margin: "15px"
                // width: "auto"
              }}
            >
              <label
               className="mt-4"
              >
                Email
              </label>
              <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
                // border: "2px solid #fff",
              }}
            >
              <label
               className="mt-4"
              >
                Message
              </label>
              <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-black font-semibold text-black "
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                width: 100,
                height: 100
              }}
            >
             <button
              className="p-2  mt-5 hover:bg-red text-black transition duration-500 bg-white text-sm rounded-lg w-full"
              type="submit"
            >
              Submit
            </button>
            </Typography>
          </form>
        </Box>
        </motion.div>
      </Container>
  
    </section>
  );
};
export default Contact;
