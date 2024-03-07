import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, UseDispatch } from 'react-redux';

import {addEvent} from "../store/eventSlice";


function toggleAddEvent({dispatch, navigate}) {
  
  let newElement = {};
  const name = document.getElementById('name').value;
  const particiapants = document.getElementById('particiapants').value;
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  
  newElement.name = name;
  newElement.particiapants = particiapants;
  newElement.day = day;
  newElement.time = time;

  dispatch(addEvent(newElement));
  navigate("/");

}

export const CreateEventPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Create new event</h3>
      <div className="create-form">
        <div>Name of the event:</div>
        <div><input type="text" placeholder='FE team sync' id="name" /></div>

        <div>Particiapants:</div>
        <div>
          <select name="" id="particiapants">
            <option value="Maria">Maria</option>
            <option value="Bob">Bob</option>
            <option value="Alex">Alex</option>
          </select>
        </div>
        <div>Day</div>
        <div>
          <select name="" id="day">
            <option value="mon">Mon</option>
            <option value="tue">Tue</option>
            <option value="wed">Wed</option>
            <option value="thu">Thu</option>
            <option value="fri">Fri</option>
          </select>
        </div>

        <div>Time</div>
        <div>
          <select name="" id="time">
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="">18:00</option>
          </select>
        </div>
      </div>
      <div className="create-form__controls">
        <div><button onClick={()=> {navigate('/')}}>Cancel</button></div>
        <div><button onClick={() => toggleAddEvent({dispatch, navigate})}>Create</button></div>
      </div>

    </div>
  )
}
