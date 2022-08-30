import React,{ useState } from 'react';

const DateInput = ({onMonth,onDay,onYear}) => {

  const [year,setYear] =  useState('2022');
  const [month,setMonth] = useState('1');
  const [day,setDay] = useState('1');

  const handleMonthChange = e => {
    setMonth(e.target.value);
    onMonth(e.target.value);
  }

  const handleDayChange = e => {
    setDay(e.target.value);
    onDay(e.target.value);
  }

  const handleYearChange = e => {
    setYear(e.target.value);
    onYear(e.target.value);
  }

  return (
    <div>
      <div>
        <label className = "block text-xl font-bold mb-2" >Date</label>
      </div>
      <div className = "flex flex-row ">
        <div className="flex flex-col w-1/3 mr-2">
          <label className=" font-bold">Month</label>
          <select value={month} onChange={handleMonthChange} className="border-grey-700 border-2">
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
          <label className=" font-bold">Day</label>
          <select  value={day} onChange={handleDayChange} className="border-grey-700 border-2 pr-5">
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
          </select>
        </div>
          
        <div className="flex flex-col w-1/3 mr-2">
          <label className=" font-bold">Year</label>
          <select value={year} onChange={handleYearChange} className="border-grey-700 border-2">
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
            <option value={'2023'}>2023</option>
            <option value={'2024'}>2024</option>
            <option value={'2025'}>2025</option>
            <option value={'2026'}>2026</option>
            <option value={'2027'}>2027</option>
            <option value={'2028'}>2028</option>
            <option value={'2029'}>2029</option>
            <option value={'2030'}>2030</option>
            <option value={'2031'}>2031</option>
            <option value={'2032'}>2032</option>
            <option value={'2033'}>2033</option>
            <option value={'2034'}>2034</option>
            <option value={'2035'}>2035</option>
            <option value={'2036'}>2036</option>
            <option value={'2037'}>2037</option>
            <option value={'2038'}>2038</option>
            <option value={'2039'}>2039</option>
            <option value={'2040'}>2040</option>
            <option value={'2041'}>2041</option>
            <option value={'2042'}>2042</option>
            <option value={'2043'}>2043</option>
            <option value={'2044'}>2044</option>
            <option value={'2045'}>2045</option>
            <option value={'2046'}>2046</option>
            <option value={'2047'}>2047</option>
            <option value={'2048'}>2048</option>
            <option value={'2049'}>2049</option>
          </select>
        </div>
                  
      </div>
    </div>
  )
}

export default DateInput
