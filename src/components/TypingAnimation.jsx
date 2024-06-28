import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ useAnimationComplete }) => {
    const [message, setMessage] = useState('');
    const [finished, setFinished] = useState(false);
    const fullMessage = 'npm run charles-portfolio';

    useEffect(() => {
        if (message.length < fullMessage.length) {
            setTimeout(() => {
                setMessage(fullMessage.slice(0, message.length + 1));
            }, 75); // Typing speed in milliseconds
        }

        if (message.length == fullMessage.length) {
            setTimeout(() => {
                useAnimationComplete();
                setFinished(true);
            }, 1000);
        }
    }, [message, fullMessage]);

    return (
        <div className='absolute top-0 left-0 [&_*]:text-l z-[-1] bg-black text-white '>

            {finished ? (<div className="flex flex-row flex-wrap h-fit w-fit items-left font-mono justify-start  "><div className="pl-8 w-full h-fit "> {fullMessage}</div>
               <div className='pl-8 text-white w-full'>▯</div>
            </div>) :
                message == fullMessage ? (
                    <div className="flex flex-row h-screen w-screen items-left font-mono justify-start text-white ">
                        <div className="pl-8 transition-opcaity opcacity-50 transition-colors duration-200 delay-300 ease-in-out">
                            {fullMessage}<br></br><span className='text-white'>▯</span>
                        </div></div >)
                    : (<div className="flex flex-row h-screen w-screen items-left font-mono justify-start text-white "><div className="pl-8 w-fit h-fit">
                        <span>{message}█</span>
                    </div></div>)}

        </div>
    );
};

export default TypingAnimation;