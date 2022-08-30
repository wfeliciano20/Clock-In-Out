import React,{ useState}from 'react';

const ClockInInput = ({onInHour,onInMinutes,onInTimeOfDay}) => {

  const [inHour, setInHour] = useState('11');
  const [inMinutes,setInMinutes] = useState('30');
  const [inTimeOfDay,setInTimeOfDay] = useState('AM');

  const handleInHour = e => {
    setInHour(e.target.value);
    onInHour(e.target.value);
  }

    const handleInMinutes = e => {
    setInMinutes(e.target.value);
    onInMinutes(e.target.value);
  }

  const handleInTimeOfDay = e => {
    setInTimeOfDay(e.target.value);
    onInTimeOfDay(e.target.value);
  }
  
  return (
    <div>
      <div>
        <label className = "block text-xl font-bold mb-2" > ClockIn </label> 
      </div>
      <div className = "flex flex-row w-[28rem]">
        <div className="flex flex-col w-1/3 mr-2" >
          <label className=" font-bold">In Hour:</label>
          <select value={inHour} onChange={handleInHour} className="border-grey-700 border-2">
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
          <label className=" font-bold">In Minute(s):</label>
          <select value={inMinutes} onChange={handleInMinutes} className="border-grey-700 border-2">
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
          <select  value={inTimeOfDay} onChange={handleInTimeOfDay} className="border-grey-700 border-2">
            <option value={'AM'}>AM</option>
            <option value={'PM'}>PM</option>
          </select>
        </div>
      </div>
    </div>

  )
}

export default ClockInInput
