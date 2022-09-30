

// hardcoded object
const store = {
  location:'Calexico',
  cookiesPerHour: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
}

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
  const cookies = store.cookiesPerHour.map((ch, index) => 
    <td key={index}>{ch}</td>
  )

  const sumCookies = store.cookiesPerHour.reduce((accumulator, current) => {
    return accumulator + current
  });


  

  

  return (
    <table>
      <tbody>
        <tr>
          <th>Location</th>
          {hours}
          <th>Totals</th>
        </tr>
        <tr>
          <td>{store.location}</td>
          {cookies}
          <td>{sumCookies}</td>
          
        </tr>
      </tbody>
    </table>
  )
}