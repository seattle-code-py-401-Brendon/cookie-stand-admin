import Form from './form.js';
import Report from './reportTable.js';

// should form strictly handle requests?
// bring in the table data from django backend deployment
// new component that does API request? or just do in report?

export default function Main(props) {
  function checkData(props) {
    if (props.totalStores > 0) {
      return <Report stores={props} />;
    }
    else {
      return <h3>No Cookie Stands Available</h3>
    }
  }



  return (
    <div className='flex flex-col pt-10 '>
      <p>welcome {props.username}</p>
      <Form />
      {checkData(props)}
    </div>

  )
}