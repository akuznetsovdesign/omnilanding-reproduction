import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './components/menu'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Case from './components/models/Case'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'



export default function Worlds() {

    // Highlite the TOC

    const { ref: sectionBlockOne, inView: firstSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
    const { ref: sectionBlockTwo, inView: secondSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
    const { ref: sectionBlockThree, inView: thirdSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
      const { ref: sectionBlockFour, inView: fourthSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
      const { ref: sectionBlockFive, inView: fifthSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
      const { ref: sectionBlockSix, inView: sixthSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
      const { ref: sectionBlockSeven, inView: seventhSectionIsVisible } = useInView({
        /* Optional options */
        threshold: 0.5,
      });

      // Highlite the TOC
    

      // Framer motion left panel loading variants

      const leftPanelVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hidden: { opacity: 0, x: -100}
      };

      // Framer motion left panel loading variants

  return (
    <div className="w-screen bg-blue-black h-screen pt-[50px] pr-[100px] pl-[445px]">
        <Menu/>
        <motion.div className="h-full fixed w-[295px] top-[0px] left-[100px] flex items-center" variants={leftPanelVariants} initial="hidden" animate="visible">
            <div className="">
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${firstSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${firstSectionIsVisible ? "active" : ""}`}>Global mission &<br></br>philosophy</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${secondSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${secondSectionIsVisible ? "active" : ""}`}>Roadmap</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${thirdSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${thirdSectionIsVisible ? "active" : ""}`}>Crypto/NFT<br></br>game platform</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${fourthSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${fourthSectionIsVisible ? "active" : ""}`}>NFT marketplace</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${fifthSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${fifthSectionIsVisible ? "active" : ""}`}>Node blockchain</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${sixthSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${sixthSectionIsVisible ? "active" : ""}`}>Ecosystem</a>
                </div>
                <div className="flex items-center justify-start mb-[15px]">
                    <div className={`menuDevider ${seventhSectionIsVisible ? "active" : ""}`}></div>
                    <a className={`tocTitle ${seventhSectionIsVisible ? "active" : ""}`}>Crypto banking</a>
                </div>
            </div>
            <Link href='#first-seciton'><a className="text-white absolute bottom-[50px] left-0 font-medium text-[25px] leading-[35px]">The future that<br></br>this world needs</a></Link>
            <div className="bg-dark-gray h-full w-[1px] absolute right-0"></div>
        </motion.div>
        <div ref={sectionBlockOne} className="h-[100%] w-full bg-blue-black mt-[100px] flex items-center justify-center flex-col" id="first-seciton">
            <a className="text-[30px] font-medium text-white mb-[100px]">Нихуя себе что за штука</a>
            <Canvas className="">
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Case/>
            </Canvas>
        </div>
        <div ref={sectionBlockTwo} className="h-full w-full bg-blue-black">
        </div>
        <div ref={sectionBlockThree} className="h-[900px] w-full bg-blue-black"></div>
        <div ref={sectionBlockFour} className="h-[900px] w-full bg-blue-black"></div>
        <div ref={sectionBlockFive} className="h-[900px] w-full bg-blue-black"></div>
        <div ref={sectionBlockSix} className="h-[900px] w-full bg-blue-black"></div>
        <div ref={sectionBlockSeven} className="h-[900px] w-full bg-blue-black"></div>
            <style jsx>
            {`
            .tocTitle{
                color: #555555;
                font-weight: 600;
                font-size: 16px;
                transition: 0.4s ease;
            }
            .tocTitle.active{
                color: #FFFFFF;
                font-weight: 600;
                font-size: 20px;
            }
            .tocTitle:hover{
                color: #FFFFFF;
            }
            .menuDevider {
                height: 2px;
                width: 20px;
                background-color: #555555;
                margin-right: 10px;
                transition: 0.4s ease;
            }
            .menuDevider.active {
                height: 2px;
                width: 30px;
                background-color: #FFFFFF;
                margin-right: 10px;
            }`}
        </style>
    </div>
  )
}
