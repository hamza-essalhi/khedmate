import { motion} from "framer-motion";
const Resume = () => {
   const animationProps ={
        start: {
            opacity: 0,
            x: -30,
            scale:0.9,
            width:0
          },
          end: {
            opacity: 1,
            x: 0,
            scale:1,
            width:'auto'
          },
    }

    return ( 
        <motion.div
        className="row"
        variants={animationProps}
        initial="start"
        animate="end"
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        >
            <h1>Resume</h1>
        </motion.div>
     );
}
 
export default Resume;