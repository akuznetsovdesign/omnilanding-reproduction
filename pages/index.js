import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function Home() {

  const router = useRouter()
  let loaderDiv = React.createRef()
    const loaderToggle = () => {
      loaderDiv.current.classList.add("active")
      setTimeout(() => router.push("/omnicore-world"), 10000);
    }

  return (
    <div>
      <div className="loaderDiv" ref={loaderDiv}></div>
    <div className="w-screen bg-blue-black h-screen">
      <div className="w-screen h-screen flex items-center justify-center z-[5] absolute top-0 left-0 flex-col">
        <div className="mb-[20px]"><Image src="/Logo.svg" alt="Logo" width={108} height={20} /></div>
        <div className="flex items-center justify-center relative">
          <div className="w-full h-full absolute top-0 left-0">
            <div className="bg-white bg-opacity-[0.01] backdrop-blur-[5px] w-[80px] h-[80px] absolute left-[124px] top-[-30px]"></div>
            <div className="bg-white bg-opacity-[0.01] backdrop-blur-[5px] w-[80px] h-[80px] absolute right-[180px] top-[-15px]"></div>
            <div className="bg-white bg-opacity-[0.01] backdrop-blur-[5px] w-[80px] h-[80px] absolute left-[180px] bottom-[-25px]"></div>
            <div className="bg-white bg-opacity-[0.01] backdrop-blur-[5px] w-[80px] h-[80px] absolute right-[80px] bottom-[0px]"></div>
          </div>
          <a className="text-black bg-clip-text text-opacity-0 bg-gradient-to-b from-white font-sans text-[80px] leading-[90px] text-center font-medium">The future that<br></br>this world needs</a>
        </div>
      </div>
      <div className="w-screen h-screen bg-white z-[4] absolute top-0 left-0 bg-opacity-[0.01] backdrop-blur-[2px]"></div>
      <div className="w-screen h-screen absolute top-0 left-0">
        <a className="text-white font-sans text-[25px] font-medium absolute top-[110px] left-[280px] z-[3]">NFT marketplace</a>
        <a className="text-white font-sans text-[25px] font-medium absolute top-[157px] right-[463px] z-[3]">Game platform</a>
        <a className="text-white font-sans text-[25px] font-medium absolute top-[283px] right-[128px] z-[3]">Payment system</a>
        <a className="text-white font-sans text-[25px] font-medium absolute bottom-[165px] left-[100px] z-[3]">Node blockchain</a>
        <a className="text-white font-sans text-[25px] font-medium absolute bottom-[215px] right-[258px] z-[3]">Crypto banking</a>
      </div>
      <div className="w-screen h-screen flex items-center justify-center z-[2] absolute top-0 left-0">
        <div className="w-screen h-screen bg-white bg-opacity-[0.01] backdrop-blur-[70px]"></div>
      </div>
      <div className="w-screen h-screen flex items-center justify-center z-[1] absolute top-0 left-0">
        <div className="h-[150px] w-[150px] bg-gradient-to-r from-blue to-light-blue rounded-[150px]"></div>
      </div>
      <div className="h-[100px] w-screen absolute bottom-[30px] left-0 z-[6] flex items-center justify-center">
        <Link href=""><div onClick={loaderToggle} className="text-black px-[50px] py-[15px] bg-white rounded-[5px] font-medium text-[16px] cursor-pointer">Explore Omnicore world</div></Link>
      </div>
    </div>
      <style jsx>
        {`
        .loaderDiv{
          height: 100vh;
          weight: 100vw;
          background-color: #139639;
          position: sticky;
          display: none;
          top: 0;
          z-index: 10;
        }
        .loaderDiv.active{
          height: 100vh;
          weight: 100vw;
          background-color: #139639;
          position: sticky;
          display: flex;
          top: 0;
          z-index: 10;
        }`}
      </style>
    </div>
  )
}


export default Home