import React from 'react'
import ReactDOM from 'react-dom';

import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import {addEvent, deleteEvent, loadEvents} from "../store/eventSlice";

export const CalendarPage = () => {


  const navigate = useNavigate();
  const events = useSelector((state) => state.events.list);
  const dispatch = useDispatch();
  

  const EventCard = ({name}) => {
    return (
      <div className='event'>
        <div>{name}</div>
        <div className='deleteButton' onClick={() => dispatch(deleteEvent(name)) }>X</div>
      </div>
    )
  }

  useEffect (()=> {
    // console.log('changed');
    // events.forEach ( (item)=>{
    //   const tableCell = document.querySelector('.' + item.day+item.time);
    //   if (tableCell) {
    //     const element = ReactDOM.createElement
    //     const card = <EventCard name={item.name} />
    //     ReactDOM.render(card, tableCell);
    //   }
    // });

  },[events]);
 
  const days  = ['mon', 'tue', 'wen', 'thu', 'fri'];
  const times = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  let result = [];

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
                  <td>Name</td>
                  {
                    days.map ((item)=> {
                      return <td>{item}</td>
                    } )
                  }
                </tr>
              </thead>
              <tbody>
                  {
                    times.map ((time) => {
                      return (
                        <tr>
                          <td>{time}</td>
                          {
                            days.map ((day)=> {
                              result = events.filter ((event) => {
                                if ((event.time == time) && (event.day == day)) {
                                  return true;
                                }
                              })

                              return (
                                <td>
                                    {
                                        (result.length) ? <EventCard key={result[0].name} name={result[0].name}/> : ''
                                    }
                                    {/* {day} */}
                                </td>
                              )
                            })
                          }
                        </tr>
                      )
                    })
                  }
              </tbody>
          </table>


          </div>
        </div>
    </div>
  )
}
