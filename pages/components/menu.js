import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const menuVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hidden: { opacity: 0, y: -50}
  };

const menuOpenElVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    closed: { opacity: 0, x: "100vw", transition: { duration: 0.5, ease: "easeOut", delay: 0.5 }}
};

const menuElOpenElVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } },
    closed: { opacity: 0, x: 150, transition: { duration: 0.5, ease: "easeOut", delay: 0.3 }}
};

const menuElSecOpenElVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.5 } },
    closed: { opacity: 0, x: 150, transition: { duration: 0.5, ease: "easeOut" }}
};

function Menu() {

    let menuDiv = React.createRef()
    const menuToggle = () => {
            if(menuDiv.current.classList.contains("active")){
                menuDiv.current.classList.remove("active")
            } else {
                menuDiv.current.classList.add("active")
            }
    }

    const [isOpen, setIsOpen] = useState(false, true)

    return <div className="mobileMenu">
        <motion.div animate={isOpen ? "open" : "closed"} variants={menuOpenElVariants} initial={false} className="w-screen h-screen z-[49] bg-blue-black fixed top-0 left-0 pt-[150px] px-[100px] pb-[100px] flex flex-row justify-between">
            <div className="flex justify-between flex-col h-full w-full">
                <motion.a animate={isOpen ? "open" : "closed"} variants={menuElOpenElVariants} initial={false} className="text-[120px] font-medium leading-[120px] text-white">Omnicore<br></br>world</motion.a>
                <motion.div animate={isOpen ? "open" : "closed"} variants={menuElOpenElVariants} initial={false} className="">
                    <div className="flex items-center justify-start mb-[15px]">
                        <div className="w-[30px] h-[2px] bg-gray mr-[10px]"></div>
                        <a className="text-[20px] text-gray font-medium hover">NFT marketplace</a>
                    </div>
                    <div className="flex items-center justify-start mb-[15px]">
                        <div className="w-[30px] h-[2px] bg-gray mr-[10px]"></div>
                        <a className="text-[20px] text-gray font-medium">Node blockchain</a>
                    </div>
                    <div className="flex items-center justify-start mb-[15px]">
                        <div className="w-[30px] h-[2px] bg-gray mr-[10px]"></div>
                        <a className="text-[20px] text-gray font-medium">Ecosystem</a>
                    </div>
                    <div className="flex items-center justify-start mb-[15px]">
                        <div className="w-[30px] h-[2px] bg-gray mr-[10px]"></div>
                        <a className="text-[20px] text-gray font-medium">Crypto banking</a>
                    </div>
                </motion.div>
            </div>
            <motion.div animate={isOpen ? "open" : "closed"} variants={menuElSecOpenElVariants} initial={false} className="h-full w-[45%] flex-col flex">
                <div className="w-full h-full rounded-[15px] bg-white"></div>
                <div className="w-full h-fit mt-[30px] flex flex-row items-end justify-between">
                    <a className="text-[20px] text-white font-medium">Crypto/NFT<br></br>game platform</a>
                    <div className="px-[35px] py-[10px] bg-white rounded-[5px] w-fit h-fit">
                        <a className="text-[14px] text-black font-medium mr-[10px]">Learn more</a>
                        <Image src="/small-arrow.svg" alt="Small arrow" width={11} height={11}/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        <motion.div className="flex w-screen h-fit justify-between items-center pt-[50px] fixed top-0 left-0 px-[100px] z-[50]" variants={menuVariants} initial="hidden" animate="visible">
            <Image src="/Logo.svg" alt="Logo" width={98} height={20} />
            <div className="cursor-pointer"><Image src="/menu-button.svg" alt="Menu" width={68} height={13} onClick={() => setIsOpen(isOpen => !isOpen)}/></div>
        </motion.div>
        <style jsx>
            {`
            .fullScreenMenu {
                z-index: 49;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                background-color: #050917;
                padding-top: 150px;
                padding-bottom: 100px;
                padding-left: 100px;
                padding-right: 100px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                visibility: visible;
            }
            .fullScreenMenu.active {
                z-index: 49;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                background-color: #050917;
                padding-top: 150px;
                padding-bottom: 100px;
                padding-left: 100px;
                padding-right: 100px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                visibility: visible;
            }`}
        </style>
        </div>
}



export default Menu

