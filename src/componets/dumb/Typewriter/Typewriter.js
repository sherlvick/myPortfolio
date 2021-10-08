import React, { useState, useEffect } from "react";


const Typewriter = (props) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [noLoop, setNoLoop] = useState(false);
    const [loop, setLoop] = useState(false);
    const [blink, setBlink] = useState(true);


    useEffect(() => {
        let interval = setTimeout(() => {

            if (noLoop === true) return () => clearTimeout(interval);

            if (loop === true) {
                setIndex(0);
                setLoop(false)
                setReverse(false);
                return () => clearTimeout(interval);
            }

            if (reverse === true && subIndex === 0 && index < props.words.length - 1) {
                setIndex(prevState => prevState + 1);
                setReverse(false);
                return () => clearTimeout(interval)
            }

            if (subIndex !== props.words[index].length && reverse === false) {
                if (index === props.words.length - 1 && subIndex === props.words[index].length - 1) {
                    setNoLoop(!props.loop);
                }
                setSubIndex((prevState) => { return (prevState + 1) });
            } else if (subIndex !== 0 && reverse === true) {
                if (index === props.words.length - 1 && subIndex === 1) {
                    setLoop(props.loop);
                }
                setSubIndex((prevState) => { return (prevState - 1) });
            } else {
                setTimeout(() => {
                    setReverse((prevState) => !prevState);
                }, 1000);
            }

        }, 100);
    }, [subIndex, reverse, noLoop]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);

    }, [blink]);

    return (
        <div>{` ${props.words[index].substring(0, subIndex)}`}{blink ? "|" : " "}</div>
    )
};


export default Typewriter