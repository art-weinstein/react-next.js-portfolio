import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi there! My full name is Artur, but you can call me Art. I am a Polish-American who spent my life growing up between Europe and Oregon.
        After graduating from high school in the United States, I moved back to Poland to strengthen my skills in Polish. I used this time as
        a gap year before college, my intent being to think more seriously about what I wanted to pursue as a career.
        I opted for a degree in psychology, and graduated from Oregon State University in 2016. Directly after 
        obtaining my undergraduate degree, I took another gap year and moved to Madrid, Spain. I worked as an English teacher to kids, and 
        taught myself Spanish through language-exchange. During my time away from Oregon, I thought about what master
        programs I wanted to attend in the future, but ultimately couldn't decide. I moved back to Oregon at the end of 2017
        and managed a dental office while taking premed classes at the University of Oregon. After the pandemic hit, I connected with a good friend who works in cybersecurity.
        After much deliberation and talking with him, I decided to search for a coding school and change my career. That's when I discovered
        upon Epicodus, decided to enroll and start my pursuit as a software engineer! 
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll = {handleScroll}>
      <>
      {TimeLineData.map((item, index) =>(
        <CarouselMobileScrollNode key = {index} final={index == TOTAL_CAROUSEL_COUNT - 1}>
          <CarouselItem
          index = {index}
          id={`coursel__itme-${index}`}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          >
          <CarouselItemTitle>
            {item.year}
            <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
          </CarouselItemTitle>
          <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItem>
        </CarouselMobileScrollNode>
      ))}
      </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key = {index}
            index = {index}
            active = {activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
            >
            <CarouselButtonDot active ={activeItem}/>
            </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
