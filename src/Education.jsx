import "./Education.css";
import {motion} from 'motion/react';
import { fadeIn } from "./variant";
const education = [
    {
        year:"2018", 
        level:"Lubuk Sikaping Senior High School", 
        description:"Chief organizer of high school science competition (Pekan Kreativitasi Siswa) at provincial level, 1st place winner of high school computer science olympiad (OSK) at district level"
    },
     {
        year:"2019",
        level:"Merdeka Belajar Dicoding",
        description: "Graduates of the Merdeka Belajar Kampus Merdeka (MBKM) Dicoding program in the fields of Front-End Developer and Machine Learning"
     },
     {
        year:"2024",
        level: "Brawijaya University",
        description: "Bachelor of computer science from the Informatics Engineering study program, Faculty of Computer Science, Universitas Brawijaya."
     }
]

export default function Educationsection() {
    return (
        <section className="education" id="education">
            <motion.h2 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount:0}}
            className="heading">Knowledge Journey</motion.h2>
            <div className="timeline-items">
                {education.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <motion.div 
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount:0.7}}
                        className="timeline-date">{item.year}</motion.div>
                        <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount:0.7}}
                        className="timeline-content">
                            <h3>{item.level}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}