import classes from "./HeroIntro.module.css";

import Typewriter from "../../../componets/dumb/Typewriter/Typewriter";
import Tooltip from "../../../componets/dumb/ToolTip/Tooltip";

const HeroIntro = (props) => {
    return (
        <div className={classes.Container}>
            <h1 className={classes.Header}><span className={classes.PaddRight10}>I'm an UI</span><Typewriter words={["Researcher", "Designer", "Developer", "Tester"]} loop={true} /></h1>

            <p className={classes.Para}>I’m a front-end developer, and I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are self-expressive and intuitive.
            </p>
            <Tooltip content="Click to view my resume" direction="right" delay={1000}><a className={classes.ViewResumeBtn} href={`${window.location.origin}/resume`}>View my resume</a></Tooltip>
        </div>
    )
}

export default HeroIntro