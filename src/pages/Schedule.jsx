import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiDrink } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineHeart } from "react-icons/hi";
import { FaCameraRetro } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiGlassShot } from "react-icons/gi";
import { LuCakeSlice } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineSportsGymnastics } from "react-icons/md";

function Schedule() {
  const { user } = useStateContext();
  if (user != null) {
    return <div>{user.displayName}</div>
  }
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'  }}
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="16:00 - 17:00"
        iconStyle={{ background: '#bdb76b', color: '#fff' }}
        icon={<BiDrink />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Vendégvárás</h3>
        <h4 className="vertical-timeline-element-subtitle">Gálffy Birtok - Bogád, Kápolnás domb, 7742</h4>
        <p>
          Mamóca iszik egy felest mindenkivel
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="17:00 - 18:00"
        iconStyle={{ background: '#d8bfd8', color: '#fff' }}
        icon={<HiOutlineHeart />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Ceremónia</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
        <p>
          Mamóca és Papóca egybe kel (megint)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="18:00 - 19:00"
        iconStyle={{ background: '#ffdab9', color: '#fff' }}
        icon={<FaCameraRetro />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Csoportképek</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
        <p>
          Foto Foto Foto Foto
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="19:00 - 20:00"
        iconStyle={{ background: '#add8e6', color: '#fff' }}
        icon={<IoFastFoodOutline />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Ünnepi Vacsora</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
        <p>
          Zabálunk egy jót
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="21:00"
        iconStyle={{ background: '#ffd700', color: '#fff' }}
        icon={<LuPartyPopper />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Nyitótánc</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
        <p>
          Tánci tánci
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="22:00"
        iconStyle={{ background: '#ffa07a', color: '#fff' }}
        icon={<GiGlassShot />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Urak Koccintása</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
        <p>
          Csak uraknak!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="23:30"
        iconStyle={{ background: '#b0c4de', color: '#fff' }}
        icon={<LuCakeSlice />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Esküvői torta és menyasszonytánc</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>
          Zaba zaba és tánci tánci
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="00:00"
        iconStyle={{ background: '#bdb76b', color: '#fff' }}
        icon={<PiBowlFood />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Éjféli lakoma</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>
          Még egy kis zaba zaba
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="04:00"
        iconStyle={{ background: '#ff6347', color: '#fff' }}
        icon={<MdOutlineSportsGymnastics />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Mulatás vége</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>
          Csőőőőőőőőőő
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Schedule