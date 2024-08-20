"use client";
import styled from "styled-components";
import { getBlog } from "../sanity/lib/sanity.query";
import type { BlogType } from "../types/blogTypes";

import BackgroundImage from "@/assets/Images/BG.png"
import IconA from "@/assets/Icons/Icon1.png"
import IconB from "@/assets/Icons/Icon2.png"
import IconC from "@/assets/Icons/Icon3.png"
import IconD from "@/assets/Icons/Icon4.png"
import IconE from "@/assets/Icons/Icon5.png"
import IconF from "@/assets/Icons/Icon6.png"
import IconG from "@/assets/Icons/Icon7.png"
import IconI from "@/assets/Icons/Icon8.png"
import IconJ from "@/assets/Icons/SearchButton.png"
import IconRight from "@/assets/Icons/IconRight.png"
import Match from "@/assets/Icons/Match.png"
import GoogleMapComponent from "./MyMap";


const IconData = [{
   title:"Adventure ",
   icon:IconA.src
},{
  title:"Arts & Culture",
  icon:IconB.src
},{
  title:"Attractions",
  icon:IconC.src
},{
  title:"Family & Kids",
  icon:IconD.src
},{
  title:"Nature & Sightseeing",
  icon:IconE.src
},{
  title:"Outdoor Tours",
  icon:IconF.src
},{
  title:"Shooping & Entertainment",
  icon:IconG.src
},{
  title:"Wellbeing",
  icon:IconI.src
},{
  icon:IconJ.src
},]


export default async function Index({locations}: any) {
  const blogs: BlogType[] = await getBlog();
  return (
    <Container>
      <FirstColumn>
        <ImageWrapper>
            <Imagetitle>
              Personalize your experience
            </Imagetitle>
            <ButtonGroup>
              <HeroButton>When</HeroButton>
              <MiddleHeroButton>Who</MiddleHeroButton>
              <HeroButton>More +</HeroButton>
            </ButtonGroup>
            <SortIcon>
              <MatchIcon src = {Match.src} />
              <>SORT YOUR MATCHES</>
            </SortIcon>
        </ImageWrapper>
      </FirstColumn>
      <SecondColumn>
        {IconData.map((icon,key) => 
            (
              <Igroup key={key}>
                <IconWrapper src={icon.icon} noicon={icon.title}/>
                <>{icon.title && icon.title}</>
              </Igroup>
            )
          )}
       </SecondColumn>
      <ThirdColumn>
          <CardGroup>
            {blogs.map((blog, key) => (
              <Card key={key}>
                <CardImage src={blog.image.image} />
                <CardFotter>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardSmalltitle>{blog.place}</CardSmalltitle>
                  <Discover>
                    <Discovertitle>
                      Discover
                    </Discovertitle>
                    <DiscoverIcon src = {IconRight.src} />
                  </Discover>
                </CardFotter>
              </Card>
            ))}
          </CardGroup>
          <MapCSS >
                <GoogleMapComponent  locations={locations}/>
          </MapCSS>
      </ThirdColumn>
    </Container>
  );
}



const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  padding: 32px;
`;

const FirstColumn = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  background-image: url(${BackgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 303px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondColumn = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 122px;
  margin-bottom: 37px;
`;
const Igroup = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper :any = styled.img`
  width:  ${(props:any) => props.noicon ? "24px" :"48px"};
  height:  ${(props:any) => props.noicon ? "24px" :"48px"};
`

const ThirdColumn = styled.div`
  display: flex;
  flex-direction: row;
  height: 778px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;


const MapCSS = styled.div`
  width: 436px;
  height: 750px;
  border-radius: 32px;
  margin-left: 32px;
  `;
  const CardGroup = styled.div`
    height: 100%;
    width: 908px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: 30px;
  `;

const Card = styled.div`
  max-width: 281px;
  width: 100%;
  @media screen and (max-width :850px) {
    max-width: 373px;
    width: 100%;
  }
`;

const CardImage = styled.img`
  border-radius: 16px;

`;

const CardFotter = styled.div`
  
`;
const CardTitle = styled.div`
  font-size: 24px;
  font-style: bold;
  width: 100%;
`;
const CardSmalltitle = styled.div`
  font-size: 16px;
  color: grey;
`;
const Discover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Discovertitle = styled.div`
  font-size: 14px;
`;
const DiscoverIcon = styled.img`
  
`;
const Imagetitle = styled.div`
margin-top: 40px;
font-size: 72px;
color: white;
font-style: bold;
`;

const SortIcon = styled.div`
margin-top: 10px;
  display: flex;
  color : white;
  font-size: 16px;
`;

const MatchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;


const Threequestion = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 16px;
  color: white;
`;

const ButtonGroup = styled.div`
  border-radius: 50px;
  width: 412px;
  height: 72px;
  background-color:rgba(163, 163, 163, .3);
  border: solid 1px rgba(189, 189, 189, .4);
  backdrop-filter: blur(25px);
  margin: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const HeroButton = styled.button`
  width: 112px;
  height: 56px;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 16px;
`

const MiddleHeroButton = styled.button`
  width: 128px;
  height: 56px;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  outline: none;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`