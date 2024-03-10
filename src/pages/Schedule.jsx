import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiDrink } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineHeart } from "react-icons/hi";
import { FaCameraRetro } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiGlassShot } from "react-icons/gi";
import { LuCakeSlice } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import './schedule_style.css';

function Schedule() {
  const { user } = useStateContext();
  if (user != null) {
    return <div>{user.displayName}</div>
  }
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--arrival"
        style={{background: 'f4eee4'}}
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="16:00 - 17:00"
        iconStyle={{ background: '#E37383', color: '#fff' }}
        icon={<BiDrink />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Vendégvárás</h3>
        <h4 className="vertical-timeline-element-subtitle">Gálffy Birtok - Bogád, Kápolnás domb, 7742</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--ceremony"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="17:00 - 18:00"
        iconStyle={{ background: '#FFB19A', color: '#fff' }}
        icon={<HiOutlineHeart />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Ceremónia</h3>
        <h4 className="vertical-timeline-element-subtitle">Aawww!</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--photo"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="18:00 - 19:00"
        iconStyle={{ background: '#FFF394', color: '#fff' }}
        icon={<FaCameraRetro />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Csoportképek</h3>
        <h4 className="vertical-timeline-element-subtitle">Fotózás és gratulációk</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--dinner"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="19:00 - 20:00"
        iconStyle={{ background: '#C1E1C1', color: '#fff' }}
        icon={<IoFastFoodOutline />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Ünnepi Vacsora</h3>
        <h4 className="vertical-timeline-element-subtitle">Pezsgős koccintás, beszédek és lakoma</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--dance"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="21:00"
        iconStyle={{ background: '#93C572', color: '#fff' }}
        icon={<LuPartyPopper />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Nyitótánc</h3>
        <h4 className="vertical-timeline-element-subtitle">Nyitó- majd szülőtánc, aztán induljon a banzáj!</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--drink"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="22:00"
        iconStyle={{ background: '#b0c4de', color: '#fff' }}
        icon={<GiGlassShot />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Urak Koccintása</h3>
        <h4 className="vertical-timeline-element-subtitle">Ennek a FELESe tréfa!</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--cake"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="23:30"
        iconStyle={{ background: '#6495ED', color: '#fff' }}
        icon={<LuCakeSlice />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Menyasszonytánc és Esküvői Torta</h3>
        <h4 className="vertical-timeline-element-subtitle">Borítékba rejtett ajándék átadás, menyasszony megpörgetés, aztán egy mennyei szelet torta</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--midnight"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="00:00"
        iconStyle={{ background: '#CBC3E3', color: '#fff' }}
        icon={<PiBowlFood />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Éjféli lakoma</h3>
        <h4 className="vertical-timeline-element-subtitle">Töltött káposzta, visszatálalt sültek</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--gameover"
        contentArrowStyle={{ borderRight: '11px solid  rgb(255, 255, 255)' }}
        date="04:00"
        iconStyle={{ background: '#D8BFD8', color: '#fff' }}
        icon={<MdOutlineSportsGymnastics />}
      >
        <h3 className="vertical-timeline-element-title font-bold">Mulatás vége</h3>
        <h4 className="vertical-timeline-element-subtitle">Köszönjük, hogy velünk ünnepeltetek! 💖</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Schedule