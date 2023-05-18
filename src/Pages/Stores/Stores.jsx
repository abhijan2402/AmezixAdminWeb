import React from 'react'
import './Stores.css'
import Filter from '../../Components/Filter/Filter'
import CancelIcon from '@mui/icons-material/Cancel';
import add from '../../assets/add.svg'
const Stores = () => {
  return (

    <div className="store-container">
         <div className="categoriefilter"><Filter/></div>
    <div className="store-content">
          <div className="store">
          <h4>New Stores</h4>
          <p>45</p>
          </div>
          <div className="store">
          <h4>Active Stores</h4>
          <p>45</p>
          </div>
          <div className="store">
          <h4>Total Stores</h4>
          <p>85</p>
          </div>
    </div>
    <div className="store-list">
          <table style={{width:"100%"}}>
              <tr>
                  <th>#Id</th>
                  <th>Store Name</th>
                  <th>Categories</th>
                  <th>Address</th>
                  <th>Doc</th>
              </tr>
              <tr>
                  <td>043</td>
                  <td>Rahul</td>
                  <td>Nike Shoes</td>
                  <td>Jagathpura</td>
                  <td>No</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>03</td>
                  <td>Jay</td>
                  <td>Watch</td>
                  <td>Civil Lines</td>
                  <td>yes</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>035</td>
                  <td>Nitin</td>
                  <td>Watch</td>
                  <td>Bassi</td>
                  <td>Yes</td>
                  <p><CancelIcon/></p>
              </tr>
              <tr>
                  <td>083</td>
                  <td>Ankit</td>
                  <td>Watch</td>
                  <td>Chomu puliya</td>
                  <td>No</td>
                  <p><CancelIcon/></p>
              </tr>
          </table>
    </div>
    <div className="addnewbtn"><button>Add New <img src={add} alt="" /></button></div>
  </div>
  )
}

export default Stores
