import { useEffect, useRef, useState } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillShieldLockFill, BsPersonWorkspace } from "react-icons/bs";
import { IoMdDocument, IoMdSchool } from "react-icons/io";
import Basics from "../components/admin/Basics";
import Auth from "../components/admin/Auth";
import Education from "../components/admin/Education";
import Experience from "../components/admin/Experience";
import Resume from "../components/admin/Resume";

const User = () => {
  document.title = "Hamza Essalhi";
  const is_worker = true;
  const [basics, setBasics] = useState(true);
  const [auth, setAuth] = useState(false);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  
  const [resume, setResume] = useState(false);
  const [delay] = useState(0);
  const [propsDelay, setDelay] = useState(0.7);
  const ref = useRef(null);
  const target = useInView(ref, { once: true });
  const animate = useAnimation();
  const transition = {
    duration: 0.5,
    delay: delay,
  };
  useEffect(() => {
    if (target) {
      animate.start("end");
    }
  }, [target, animate]);
  const handleProfileMenu = (target) => {
    setDelay(0);
    switch (target) {
      case "experience":
        setExperience(true);
        setAuth(false);
        setEducation(false);
        setBasics(false);
        setResume(false);
        break;

      case "auth":
        setExperience(false);
        setAuth(true);
        setEducation(false);
        setBasics(false);
        setResume(false);
        break;
      case "education":
        setExperience(false);
        setAuth(false);
        setEducation(true);
        setBasics(false);
        setResume(false);
        break;
      case "resume":
        setExperience(false);
        setAuth(false);
        setEducation(false);
        setBasics(false);
        setResume(true);
        break;
      default:
        setExperience(false);
        setAuth(false);
        setEducation(false);
        setBasics(true);
        setResume(false);
    }
  };
  
  return (
    <motion.div
      className="user"
      ref={ref}
      variants={{
        start: {
          opacity: 0,
          scale: 0.8,
          x: 100,
        },
        end: {
          opacity: 1,
          scale: 1,
          x: 0,
        },
      }}
      initial="start"
      animate={animate}
      transition={transition}
    >
      <motion.div
        className="row user-profile-menu"
        variants={{
          start: {
            opacity: 0,
            y: -100,
          },
          end: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="start"
        animate={animate}
        transition={{
          duration: 0.5,
          delay: delay + 0.3,
        }}
      >
        {is_worker ? (
          <div className="col">
            <motion.div
              variants={
                !basics
                  ? {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 20,
                      },
                    }
              }
              initial="start"
              animate="end"
              transition={
                !basics
                  ? {
                      duration: 0.5,
                      delay: delay + 0.2,
                    }
                  : {
                      duration: 0.5,
                      delay: 0.2,
                    }
              }
            >
              <FaRegUserCircle
                className={
                  basics ? "user-profile-icon active" : "user-profile-icon"
                }
                onClick={() => handleProfileMenu("basics")}
              ></FaRegUserCircle>
            </motion.div>
            <motion.div
              variants={
                !auth
                  ? {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 20,
                      },
                    }
              }
              initial="start"
              animate="end"
              transition={
                !auth
                  ? {
                      duration: 0.5,
                      delay: delay + 0.2,
                    }
                  : {
                      duration: 0.5,
                      delay: 0.2,
                    }
              }
            >
              <BsFillShieldLockFill
                className={
                  auth ? "user-profile-icon active" : "user-profile-icon"
                }
                onClick={() => handleProfileMenu("auth")}
              ></BsFillShieldLockFill>
            </motion.div>
            <motion.div
              variants={
                !education
                  ? {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 20,
                      },
                    }
              }
              initial="start"
              animate="end"
              transition={
                !education
                  ? {
                      duration: 0.5,
                      delay: delay + 0.2,
                    }
                  : {
                      duration: 0.5,
                      delay: 0.2,
                    }
              }
            >
              <IoMdSchool
                className={
                  education ? "user-profile-icon active" : "user-profile-icon"
                }
                onClick={() => handleProfileMenu("education")}
              ></IoMdSchool>
            </motion.div>
            <motion.div
              variants={
                !experience
                  ? {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 20,
                      },
                    }
              }
              initial="start"
              animate="end"
              transition={
                !experience
                  ? {
                      duration: 0.5,
                      delay: delay + 0.2,
                    }
                  : {
                      duration: 0.5,
                      delay: 0.2,
                    }
              }
            >
              <BsPersonWorkspace
                className={
                  experience ? "user-profile-icon active" : "user-profile-icon"
                }
                onClick={() => handleProfileMenu("experience")}
              ></BsPersonWorkspace>
            </motion.div>
            <motion.div
              variants={
                !resume
                  ? {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 0,
                      },
                    }
                  : {
                      start: {
                        opacity: 0,
                        y: -100,
                      },
                      end: {
                        opacity: 1,
                        y: 20,
                      },
                    }
              }
              initial="start"
              animate="end"
              transition={
                !resume
                  ? {
                      duration: 0.5,
                      delay: delay + 0.2,
                    }
                  : {
                      duration: 0.5,
                      delay: 0.2,
                    }
              }
            >
              <IoMdDocument
                className={
                  resume ? "user-profile-icon active" : "user-profile-icon"
                }
                onClick={() => handleProfileMenu("resume")}
              ></IoMdDocument>
            </motion.div>
          </div>
        ) : (
          <></>
        )}
      </motion.div>

      {basics && <Basics delay={propsDelay}/>}
      {auth && <Auth delay={propsDelay}  />}
      {education && <Education  delay={propsDelay}/>}
      {experience && <Experience delay={propsDelay}/>}
      {resume && <Resume delay={propsDelay}/>}
    </motion.div>
  );
};

export default User;
