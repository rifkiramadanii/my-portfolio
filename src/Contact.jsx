import "./Contact.css";
import contact from "./assets/get-in-touch.png";
import {motion} from 'motion/react';

export default function Contactsection(){
    return(
        <motion.section initial={{ opacity:0 }} whileInView={{opacity: 1, transition:{duration:2, ease:"easeInOut"}}} className="contact" id="contact">
            <h2 className="section-title">
                Get In Touch
            </h2>
            <img src={contact} alt="contact" />
            <div className="contact-form">
                <h3>Contact</h3>
                <form action="mailto:ramadhanirifki2@gmail.com" method="post" encType="text/plain">
                <p>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="Your Name" 
                        id="name" 
                        required
                    />
                </p>
                <p>
                    <label>E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter E-Mail"
                        required
                    />
                </p>
                <p>
                    <label>Number</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        name="number"
                        placeholder="Enter Number"
                        required
                    />
                </p>
                <p className="block">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="3"
                        placeholder="Type Your Message"
                        required
                    ></textarea>
                </p>
                <p className="block">
                    <button>Send Message</button>
                </p>
                </form>
            </div>
        </motion.section>
    )
}