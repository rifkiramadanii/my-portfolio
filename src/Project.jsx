import "./Project.css";
import {motion} from 'motion/react';
import { fadeIn } from "./variant";

const project = [
    {category:"Portfolio Website", description:"Portfolio that show the projects for who need it", imgUrl:"./assets/portfahad.png", iconUrl:"./briefcase.png"},
    {category:"Machine Learning Project", description:"Data Sience Project that use Machine Learning to predict the future", imgUrl:"./assets/accuracies.png", iconUrl:"./machine-learning.png"},
    {category:"Simple Logo Design", description:"Design some simple logo for who need it", imgUrl:"./assets/KABAUFC2.png", iconUrl:"./simple-logo-designer.png"},
    {category:"WPAP Design", description:"Design some cools Wedha's Pop Art Portrait", imgUrl:"./assets/ErikaXwpaP.png", iconUrl:"./vector-art.png"}
]

export default function Projectsection(){
    return (
        <section className="project" id="project">
            <div className="container">
                <motion.h2 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0}}
                className="section-title">My Projects</motion.h2>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0}}
                className="features-grid">
                    {project.map((item, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <img src={item.iconUrl} alt="icon" width="48" height="48"/>
                            </div>
                            <h3 className="feature-title">{item.category}</h3>
                            <p className="feature-description">{item.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}