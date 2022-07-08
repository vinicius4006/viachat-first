
import React, {useState, useEffect} from 'react';


export default function ScrollButton(){

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            window.addEventListener('scroll', toggleVisible);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className='fixed bottom-12 w-full flex justify-center items-center'>

<span className="  
 h-5 text-5xl z-10 cursor-pointer">
    <img src='arrow-up.png' onClick={scrollTop}
    style={{display: visible ? 'inline': 'none'}} />
</span>
        </div>
    );
}