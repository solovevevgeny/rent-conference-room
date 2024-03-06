import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

export const CalendarPage = () => {

  const days  = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const times = ['10','11','12','13','14','15','16','17','18']

  let calendarItems = [
    {
      name: 'FE team sync',
      participants: 'Maria, Bob, Alex',
      day: 'monday',
      time: '14'
    },
    {
      name: 'Daily standup',
      participants: 'Maria, Bob, Alex',
      day: 'friday',
      time: '10'
    },
    {
      name: 'Test',
      participants: 'Maria, Bob, Alex',
      day: 'monday',
      time: '12'
    },
    {
      name: 'Test 2',
      participants: 'Maria, Bob, Alex',
      day: 'friday',
      time: '18'
    },
  ];

  const navigate = useNavigate();

  useEffect (()=> {
    calendarItems.forEach ( (item)=>{
      const tableCell = document.querySelector('.' + item.day+item.time);
      if (tableCell) {
        tableCell.innerHTML = "<div class='event'><div>" + item.name + "</div><div class='deleteButton'>X</div></div>";
      }
    })

  },[calendarItems])
 
  return (
    
    <div className="container">
   
        <div className='calendar'>
          <div className="calendar__header">
            <div><h2>Calendar</h2></div>
            <div>
              <select name="" id="">
                <option value="">All members</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
              </select>
            </div>
            <div>
              <button onClick={() => {navigate('/create')}}>Add event</button>
            </div>
          </div>

          <div className="calendar__body">
            <table className="calendar-table">
              <thead>
                <tr>
                  <td>name</td>
                  <td>Mon</td>
                  <td>Tue</td>
                  <td>Wed</td>
                  <td>Thu</td>
                  <td>Fri</td>
                </tr>
              </thead>
              <tbody>

              
              <tr>
                <td>10:00</td>
                <td className='monday10'></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday10'></td>
              </tr>

              <tr>
                <td>11:00</td>
                <td className='monday11'></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday11'></td>
              </tr>
              <tr>
                <td>12:00</td>
                <td className='monday12'></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday12'></td>
              </tr>
              <tr>
                <td>13:00</td>
                <td className='monday13'></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday13'></td>
              </tr>
              <tr>
                <td>14:00</td>
                <td className='monday14'></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday14'></td>
              </tr>
              <tr>
                <td>15:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday15'></td>
              </tr>
              <tr>
                <td>16:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday16'></td>
              </tr>
              <tr>
                <td>17:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday17'></td>
              </tr>
              <tr>
                <td>18:00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='friday18'></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
