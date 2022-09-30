
export default function Report(props) {
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

  const location = props.stores.stores[0].location;

  // create a map function to render hours from loop
  const hours = time.map((hr, index) =>
    <th key={index}>{hr}</th>
  )
  const cookies = props.stores.stores[0].cookiesPerHour.map((ch, index) =>
    <td key={index}>{ch}</td>
  )

  const sumCookies = props.stores.stores[0].cookiesPerHour.reduce((accumulator, current) => {
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
          <td>{location}</td>
          {cookies}
          <td>{sumCookies}</td>

        </tr>
      </tbody>
    </table>
  )
}