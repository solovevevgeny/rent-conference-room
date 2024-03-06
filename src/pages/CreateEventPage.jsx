import React from 'react'
import { useNavigate } from "react-router-dom";


export const CreateEventPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Create new event</h3>
      <div className="create-form">
        <div>Name of the event:</div>
        <div><input type="text" placeholder='FE team sync'/></div>

        <div>Particiapants:</div>
        <div>
          <select name="" id="">
            <option value="">Maria</option>
            <option value="">Bob</option>
            <option value="">Alex</option>
          </select>
        </div>
        <div>Day</div>
        <div>
          <select name="" id="">
            <option value="">Mon</option>
            <option value="">Tue</option>
            <option value="">Wed</option>
            <option value="">Thu</option>
            <option value="">Fri</option>
          </select>
        </div>

        <div>Time</div>
        <div>
          <select name="" id="">
            <option value="">10:00</option>
            <option value="">11:00</option>
            <option value="">12:00</option>
            <option value="">13:00</option>
            <option value="">14:00</option>
            <option value="">15:00</option>
            <option value="">16:00</option>
            <option value="">17:00</option>
            <option value="">18:00</option>
          </select>
        </div>
      </div>
      <div className="create-form__controls">
        <div><button onClick={()=> {navigate('/')}}>Cancel</button></div>
        <div><button>Create</button></div>
      </div>

    </div>
  )
}
