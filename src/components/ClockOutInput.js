import React,{ useState } from 'react';

const ClockOutInput = ({onOutHour,onOutMinutes,onOutTimeOfDay}) => {

  const [outHour, setOutHour] = useState('4');
  const [outMinutes,setOutMinutes] = useState('30');
  const [outTimeOfDay,setOutTimeOfDay] = useState('PM');

  const handleOutHour = e => {
    setOutHour(e.target.value);
    onOutHour(e.target.value);
  }

  const handleOutMinutes = e => {
    setOutMinutes(e.target.value);
    onOutMinutes(e.target.value);
  }

  const handleOutTimeOfDay = e => {
    setOutTimeOfDay(e.target.value);
    onOutTimeOfDay(e.target.value);
  }


  return (
    <div>
      <div>
        <label className = "block text-xl font-bold mb-2" > ClockOut </label> 
      </div>
      <div className = "flex flex-row items-around justify-around w-[32rem] ">
        <div className="flex flex-col w-1/3 mr-2">
          <label className=" font-bold">Out Hour:</label>
          <select value={outHour} onChange={handleOutHour} className="border-grey-700 border-2">
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
            <option value={'6'}>6</option>
            <option value={'7'}>7</option>
            <option value={'8'}>8</option>
            <option value={'9'}>9</option>
            <option value={'10'}>10</option>
            <option value={'11'}>11</option>
            <option value={'12'}>12</option>
          </select>
        </div>
        <div className="flex flex-col w-1/3 mr-2">
          <label className=" font-bold">Out Minute(s):</label>
          <select value={outMinutes} onChange={handleOutMinutes} className="border-grey-700 border-2">
            <option value={'0'}>0</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
            <option value={'6'}>6</option>
            <option value={'7'}>7</option>
            <option value={'8'}>8</option>
            <option value={'9'}>9</option>
            <option value={'10'}>10</option>
            <option value={'11'}>11</option>
            <option value={'12'}>12</option>
            <option value={'13'}>13</option>
            <option value={'14'}>14</option>
            <option value={'15'}>15</option>
            <option value={'16'}>16</option>
            <option value={'17'}>17</option>
            <option value={'18'}>18</option>
            <option value={'19'}>19</option>
            <option value={'20'}>20</option>
            <option value={'21'}>21</option>
            <option value={'22'}>22</option>
            <option value={'23'}>23</option>
            <option value={'24'}>24</option>
            <option value={'25'}>25</option>
            <option value={'26'}>26</option>
            <option value={'27'}>27</option>
            <option value={'28'}>28</option>
            <option value={'29'}>29</option>
            <option value={'30'}>30</option>
            <option value={'31'}>31</option>
            <option value={'32'}>32</option>
            <option value={'33'}>33</option>
            <option value={'34'}>34</option>
            <option value={'35'}>35</option>
            <option value={'36'}>36</option>
            <option value={'37'}>37</option>
            <option value={'38'}>38</option>
            <option value={'39'}>39</option>
            <option value={'40'}>40</option>
            <option value={'41'}>41</option>
            <option value={'42'}>42</option>
            <option value={'43'}>43</option>
            <option value={'44'}>44</option>
            <option value={'45'}>45</option>
            <option value={'46'}>46</option>
            <option value={'47'}>47</option>
            <option value={'48'}>48</option>
            <option value={'49'}>49</option>
            <option value={'50'}>50</option>
            <option value={'51'}>51</option>
            <option value={'52'}>52</option>
            <option value={'53'}>53</option>
            <option value={'54'}>54</option>
            <option value={'55'}>55</option>
            <option value={'56'}>56</option>
            <option value={'57'}>57</option>
            <option value={'58'}>58</option>
            <option value={'59'}>59</option>
          </select>
        </div>
        <div className="flex flex-col w-1/3 mr-2">
          <label className=" font-bold">Time of Day:</label>
          <select value={outTimeOfDay} onChange={handleOutTimeOfDay} className="border-grey-700 border-2">
            <option value={'AM'}>AM</option>
            <option value={'PM'}>PM</option>
          </select>
        </div>
      </div> 
    </div>
  )
}

export default ClockOutInput
