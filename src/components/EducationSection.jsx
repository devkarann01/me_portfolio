import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function EducationSection() {
  return (
    <div className='text-white md:pt-10 pt-6' id='EducationSection'>

    <div className='py-10'>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Education</div>
      <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
    </div>

<VerticalTimeline>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(233, 30, 99)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Arts</h3>
    <h4 className="vertical-timeline-element-subtitle">Political Science</h4>
    <p>
    University of Delhi (SOL)
    </p>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)'  }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">IT Expert Course</h3>
    <h4 className="vertical-timeline-element-subtitle">Delhi, Ind</h4>
    <p>
    Overall, my experience with the IT Expert Course was incredibly positive. This course thoroughly prepared me for a successful career in the IT field. I highly recommend it to anyone looking to advance their career in IT.
    </p>
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Higher School Certificate</h3>
    <h4 className="vertical-timeline-element-subtitle">CBSE Board</h4>
    <p>
    Sanatan Dharam Senior Secondary School. 
    </p>
  </VerticalTimelineElement>
 
 
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">High School Certificate</h3>
    <h4 className="vertical-timeline-element-subtitle">CBSE Board</h4>
    <p>
    Sanatan Dharam Senior Secondary School.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>


    </div>
  )
}

export default EducationSection