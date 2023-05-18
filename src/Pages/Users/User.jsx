import React from 'react'
import './User.css'
import Filter from '../../Components/Filter/Filter'
import CancelIcon from '@mui/icons-material/Cancel';
import add from '../../assets/add.svg'

const User = () => {
  return (
    <div className="User-container">
<div className="categoriefilter"><Filter/></div>
    <div className="User-content">
          <div className="User">
          <h4>New Users</h4>
          <p>45</p>
          </div>
          <div className="User">
          <h4>Active Users</h4>
          <p>415</p>
          </div>
          <div className="User">
          <h4>Total Users</h4>
          <p>485</p>
          </div>
    </div>
    <div className="User-list">
          <table style={{width:"100%"}}>
              <tr>
                  <th>#Id</th>
                  <th>Mobile Number</th>
                  <th>Email Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Last Hight Amount</th>
              </tr>
              <tr>
                  <td>043</td>
                  <td>91735689478</td>
                  <td>xys@gmail.com</td>
                  <td>Ram</td>
                  <td>Jagathpura</td>
                  <td>425</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>03</td>
                  <td>91735689478</td>
                  <td>xys@gmail.com</td>
                  <td>Shyam</td>
                  <td>Civil Lines</td>
                  <td>725</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>035</td>
                  <td>91735689478</td>
                  <td>xys@gmail.com</td>
                  <td>Balram</td>
                  <td>Bassi</td>
                  <td>725</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>083</td>
                  <td>91735689478</td>
                  <td>xys@gmail.com</td>
                  <td>Sita</td>
                  <td>Chomu puliya</td>
                  <td>325</td>
                  <p><CancelIcon/></p>
              </tr>
          </table>
    </div>
    <div className="Useraddnewbtn"><button>Add New <img src={add} alt="" /></button></div>
  </div>
  )
}

export default User
