import { useState } from "react";

import classes from "./Contact.module.css";

import contactBanner from "../../assets/Images/contact.png";
// import icons
import { Phone, Mail, Map } from "../../ProjectIcons";

const Contact = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    
    return (
        <div className={classes.PageContainer}>
            <div className={classes.ContactFormWrapper}>
                <h1 className={classes.FormHeader}>Let's talk</h1>
                <p className={classes.MutedText}>I’m interested in freelance opportunities – especially ambitious for large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
                <form onSubmit={handleSubmit}>
                    <div className={classes.FormGroup} >
                        <label className={classes.Label}>Name</label>
                        <input
                            type="text"
                            name="username"
                            className={classes.FormInput}
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.FormGroup} >
                        <label className={classes.Label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            className={classes.FormInput}
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.FormGroup} >
                        <label className={classes.Label}>Message</label>
                        <textarea
                            name="message"
                            className={classes.FormInput}
                            rows="9"
                            value={inputs.message || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <input type="submit" className={classes.SendMsgBtn} value="Send message" />
                </form>
            </div>
            <div className={classes.ContactDetailWrapper}>
                <img className={classes.ContactImg} src={contactBanner} width="256px" height="256px" alt="contact" />
                <div className={classes.ContactInfo}>
                    <Map /><a href="https://goo.gl/maps/sQ1B1CdFRLUfSZ856" target="_blank" rel="noopener" >Paramount Raghavendra, Victorian Meadows Rd, Silver Springs Layout, Munnekollal, Bengaluru, Karnataka 560037</a>
                </div>
                <div className={classes.ContactInfo}>
                    <Phone /><a href="tel:+91 9739746003" >+91 9739746003</a>
                </div>
                <div className={classes.ContactInfo}>
                    <Mail /><a href="mailto:kvicky047@gmail.com" >kvicky047@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact