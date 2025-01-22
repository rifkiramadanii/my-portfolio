import "./Home.css"
import {motion} from 'motion/react';
import { fadeIn } from "./variant";
const homedata = 
    {
        avatarUrl: "./Rifki-Profile.png",
        name: "Rifki",
        job: "ML Enthusiast",
        description: "Has an interest in the world of Machine Learning. The experience gained from studies during college and other programs in the same field was pursued for approximately 6 years. This interest in Machine Learning is focused on data science and data analysis learned using Python and frameworks such as Tensorflow and Pytorch, making knowledge of the world of machine learning quite basic."
    }

export default function Homesection(){
    return (
        <section className="home" id="home">
            <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount:0.7}}
            src={homedata.avatarUrl}
            alt="avatar" />
            <div className="home-content">
                <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0.7}}
                >Hi, I'm <span>{homedata.name}</span>
                </motion.h1>
                <h3 className="text-animation">{homedata.job} <span></span></h3>
                <motion.p
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0.7}}>
                    {homedata.description}
                </motion.p>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0.7}}
                className="social-icons">
                    <a href="https://www.linkedin.com/in/rifki-ramadanii/" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/hawariyyun" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.instagram.com/rifkirmdhnii/" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@lluslec" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-tiktok"></i>
                    </a>
                </motion.div>
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0.7}}
                className="btn-group">
                    <a href="#" className="btn">
                        Hire
                    </a>
                    <a href="#contact" className="btn">
                        Contact
                    </a>
                </motion.div>
            </div>
        </section>
    )
}