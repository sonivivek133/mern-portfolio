import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md'
import './Education.css'

const Education = () => {
  return ( 
    <div>
     <div className="container education" id='education'>
     <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> EDUCATION DETAILS </h2>
     <hr />
     <VerticalTimeline>
     <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2019-2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.Tech </h3> <h5>(Computer Science and Engineering)</h5> 
    <h5>Percentage : 75%</h5>
    <h4 className="vertical-timeline-element-subtitle">Lovely Professional University</h4>
    <h5 className="vertical-timeline-element-subtitle">Jalandhar, Punjab</h5>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2018-2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">INTERMEDIATE </h3> <h5>(PCM)</h5> 
    <h5>Percentage : 87%</h5>
    <h4 className="vertical-timeline-element-subtitle">Sindhu Vidya Mandir</h4>
    <h5 className="vertical-timeline-element-subtitle">Satna , Madhya Pradesh</h5>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2016-2017"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">MATRICULATION </h3> 
    <h5>Percentage : 86%</h5>
    <h4 className="vertical-timeline-element-subtitle">Lucky Convent School</h4>
    <h5 className="vertical-timeline-element-subtitle">Birsinghpur, Satna</h5>
    
  </VerticalTimelineElement>
     </VerticalTimeline>
     </div>
    </div>
  )
}

export default Education