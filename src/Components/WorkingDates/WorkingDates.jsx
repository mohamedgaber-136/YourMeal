
import './workingDates.css'
import img from './pexels-mikhail-nilov-8093602.jpg'
const WorkingDates = () => {
  return (
    <div className="DatesParent d-flex  flex-column flex-md-row">
<div className="datesTiming h-100 bg-dark d-flex flex-column justify-content-center align-items-center p-3">
<h2 className=' text-center'>Opening Hour</h2>
<div className="times    d-flex flex-column gap-2 justify-content-center">
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Saturday</p>
    <span className='lineDashed' ></span>
    <p>09 Am to 11Pm</p>
</div>

<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Sunday</p>
    <span className='lineDashed' ></span>
    <p>Closed</p>
</div>
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Monday</p>
    <span className='lineDashed' ></span>
    <p>09 Am to 11Pm</p>
</div>
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Tuesday</p>
    <span className='lineDashed' ></span>
    <p>09 Am to 11Pm</p>
</div>
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Wednsday</p>
    <span className='lineDashed' ></span>
    <p>09 Am to 11Pm</p>
</div>
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Thurday</p>
    <span className='lineDashed' ></span>
    <p>09 Am to 10Pm</p>
</div>
<div className="dayData d-flex align-items-center justify-content-between ">
    <p className='text-start'>Friday</p>
    <span className='lineDashed' ></span>
    <p>Closed</p>
</div>
</div>
</div>
<div className="datesImg " style={{backgroundImage:`url(${img})`}}>

</div>
    </div>
  )
}
export default WorkingDates;
