

export default function Report() {

  let time = [];
  let pmTime = 1;
  let noonTime = 12;

  // set the hours for the headers
  for (let i = 6; i <= 19; i++) {
    if (i <= 11) {
      time.push(i + 'am ');
    }
    if (i == 12) {
      time.push(noonTime + 'pm ');
    }
    else if (i >= 12) {
      time.push(pmTime + 'pm ');
      pmTime++;
    }
  }
  // create a map function to render hours from loop
  const hours = time.map((hr, index) => 
    <th key={index}>{hr}</th>
  )
  

  return (
    <table>
      <tbody>
        <tr>
          <th>Location</th>
          {hours}
        </tr>
      </tbody>
    </table>
  )
}