import React from 'react'
import { images, img1, img2, img3 } from '@/assets/img'
import { Button } from '@/components/ui/button'
import { AiOutlineRise } from 'react-icons/ai'
import { FaArrowRightLong, FaQuoteRight, FaUsers } from 'react-icons/fa6'
import { IoExtensionPuzzleOutline, IoSearch } from 'react-icons/io5'
import { MdWifiProtectedSetup } from 'react-icons/md'
import { LiaHospitalAltSolid } from 'react-icons/lia'
import { HiBuildingLibrary } from 'react-icons/hi2'
import { malaysia } from '@/assets/img/icons'

const Home = () => {
  const keyChallenges = [
    { icon: <IoSearch />, title: "Limited Local Options", description: "Long waits and few local specialists available." },
    { icon: <IoExtensionPuzzleOutline />, title: "Fragmented Information", description: "Finding, comparing, and choosing care can feel overwhelming." },
    { icon: <AiOutlineRise />, title: "Higher Local Costs for Specialized Treatments", description: "Specialized treatments at home are often more expensive." },
    { icon: <MdWifiProtectedSetup />, title: "Lack of Support for International Care", description: "Patients struggle to find reliable guidance abroad." },
    { icon: <LiaHospitalAltSolid />, title: "Hospitals", description: "We help build trust through localized digital presence, tailored visibility, and seamless patient pathways." },
    { icon: <FaUsers />, title: "Patients", description: "We guide patients from finding specialists to travel and after-care, making care abroad simple." },
    { icon: <HiBuildingLibrary />, title: "Governments & Partners", description: "Assist governments and partners in strengthening medical tourism and cross-border healthcare collaboration." },
  ]

  const destinations = [
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
    { flag: malaysia, name: "malaysia", description: "Affordable, modern hospitals with English‑speaking staff. Popular for fertility, cardiology, health screenings, and holistic wellness.", image: images },
  ]

  return (
    <div>
      {/* banner */}
      <section className='py-[40px] flex flex-col space-y-10 space-x-[40px] lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/3 flex gap-y-[32px] flex-col'>
          <h3 className='text-[28px] font-medium text-[#212121] leading-[normal] lg:text-[48px]'>Empowering Asia to Access World‑Class Healthcare</h3>
          <p className='text-[#666666] font-medium'>Healthcare should have no borders. At Medifly, we are building a future where patients across Asia can access trusted, high‑quality care around the world.</p>
          <Button variant="custom" className="py-[16px] px-[32px] h-[50px] w-fit">
            Partner with us
            <FaArrowRightLong />
          </Button>
        </div>
        <div className='flex flex-col lg:flex-1 lg:gap-[40px] lg:grid lg:grid-cols-2'>
          <img src={img1} alt="image-1" className='h-[262px] lg:h-full object-cover rounded-[10px] lg:row-span-1' />
          <div className='hidden lg:flex lg:flex-col lg:gap-[19px] lg:justify-between'>
            <img src={img2} alt="image-2" className='rounded-[10px]' />
            <div className='bg-[#ade4ff] rounded-[10px] p-[24px] space-y-[54px]'>
              <FaQuoteRight />
              <h5 className='text-[20px] text-[#000000] font-medium'>Because healthcare is personal — and global.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* key challenges */}

      <section className='bg-[#f6f4f2] py-[40px]'>
        <div className='text-center'>
          <p className='uppercase font-semibold text-sm'>Key Challenges</p>
          <h1 className='mt-4 mb-6 text-[28px] font-medium w-full lg:text-5xl lg:w-3xl lg:mx-auto'>Overcoming Barriers to Better Healthcare</h1>
          <p className='text-md text-[#666666] font-medium'>Overcoming Barriers to Better Healthcare</p>
        </div>
        <div className='mt-8 lg:flex lg:gap-5'>
          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2'>
            {keyChallenges.slice(0, 4).map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-xl rounded-lg p-2 bg-[#ade4ff] w-fit">
                  {challenge.icon}
                </div>
                <p className="mt-5 mb-3 font-semibold">{challenge.title}</p>
                <p className="text-[#666666] font-medium">{challenge.description}</p>
              </div>
            ))}
          </div>
          <div className='bg-[#ade4ff] p-8 rounded-lg mt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-between lg:w-1/4'>
            <h4 className='mb-8 text-2xl font-medium lg:text-[28px]'>Better health decisions shouldn’t depend on where you live</h4>
            <Button variant="custom" className="py-[16px] px-[32px] h-[50px] w-fit bg-white text-[#000000]">
              Partner with us
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </section>

      {/* our mission */}
      <section className='py-10'>
        <div className='text-center'>
          <p className='uppercase font-semibold text-sm'>Our Mission</p>
          <h1 className='mt-4 mb-6 text-[28px] font-medium w-full lg:text-5xl lg:w-3xl lg:mx-auto'>World-Class Healthcare, Within Reach</h1>
          <p className='text-md text-[#666666] font-medium'>At Medifly, we believe access to the best care shouldn't depend on where you live.  Our mission is to make healthcare flow freely across borders, removing barriers and bringing world-class expertise closer to everyone</p>
        </div>
        <img src={img3} alt="image-3" className='h-[145.3px] w-full rounded-xl object-cover mt-8 md:h-[315.46px] lg:mt-10 lg:h-[416px]' />
      </section>

      {/* who we serve */}
      <section className='py-10'>
        <h1 className='mb-6 text-[28px] text-center font-medium w-full lg:text-5xl lg:w-3xl lg:mx-auto'>Who We Serve</h1>
        <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3'>
          {keyChallenges.slice(4).map((challenge, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="text-xl rounded-lg p-2 bg-[#ade4ff] w-fit">
                {challenge.icon}
              </div>
              <p className="mt-5 mb-3 font-semibold">{challenge.title}</p>
              <p className="text-[#666666] font-medium">{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* top destination for asia */}
      <section className='py-10'>
        <h2 className='mb-6 text-[28px] text-center font-medium w-full lg:text-4xl lg:w-3xl lg:mx-auto'>Top Destinations for Asia</h2>
        <div>
          {destinations.map((destination, index) => (
            <div key={index} className={`bg-[url(${destination.image}] bg-cover bg-center h-[468.48px]`}>
              <div>
                <img src={destination.flag} alt={destination.name} />
                <p>{destination.name}</p>
              </div>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home