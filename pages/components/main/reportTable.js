

export default function Report() {

  let time = [];
  let pmTime = 1;
  let noonTime = 12;


  for (let i = 6; i <= 19; i++) {
    let y = 1;
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

  return (
    <table>
      <tbody>
        <tr>
          <th>Location</th>
        </tr>
      </tbody>
    </table>
  )
}