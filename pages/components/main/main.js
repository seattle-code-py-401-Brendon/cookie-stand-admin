import Form from './form.js';
import Report from './reportTable.js';

// should form strictly handle requests?
// bring in the table data from django backend deployment
// new component that does API request? or just do in report?

// create hardcoded object
// const cookieStore = {
//   location:'';
// }

export default function Main() {
  return (
      <div className='flex flex-col pt-10 '>
        <Form />
        <Report/>
      </div>
    
  )
}