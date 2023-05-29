import React from 'react'
import './Feedback.css'
import Filter from  '../../Components/Filter/Filter'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Feedback = () => {
  return (
    <div>
       <div className="Feedbackcategoriefilter">
        <Filter />
      </div>
      <div className="Feedback-content" id="list">
        <div className="Feedbacks">
          <h4>User Feedback</h4>
          <p>20</p>
        </div>
        <div className="Feedbacks">
          <h4>Store Feedback</h4>
          <p>15</p>
        </div>
        <div className="Feedbacks">
          <h4>Delivery Boy Feedback</h4>
          <p>45</p>
        </div>
      </div>
      <div className="Feedback-list">
        <table style={{ width: "100%" }}>
          <tr>
            <th>#Id</th>
            <th>Review</th>
            <th>Last Update</th>
            <th>Role <ArrowDropDownIcon id="arrow" /></th>
            <th>Status <ArrowDropDownIcon id="arrow"/></th>
            <th>Star <ArrowDropDownIcon id="arrow"/></th>
          </tr>
          <tr>
            <td>01</td>
            <td>356</td>
            <td>Big bolw City</td>
            <td>1425</td>
            <td>5784</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>02</td>
            <td>5689</td>
            <td>Spark Piplod</td>
            <td>1235</td>
            <td>7854</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>03</td>
            <td>9478</td>
            <td>syx store</td>
            <td>3452</td>
            <td>4520</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
          <tr>
            <td>04</td>
            <td>917</td>
            <td>abc store</td>
            <td>4021</td>
            <td>5000</td>
            <td>5784</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Feedback
