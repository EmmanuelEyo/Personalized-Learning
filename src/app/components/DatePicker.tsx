import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/redux/store';
import { setDate } from '@/redux/slice';
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedDate = useSelector((state: RootState) => state.app.selectedDate);
  const [startDate, setStartDate] = useState<Date | null>(selectedDate ? new Date(selectedDate) : null);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      dispatch(setDate(date.toISOString()));
    }
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="yyyy/MM/dd"
      className="rounded bg-slate-700 p-2 focus:outline-none text-gray-700"
    />
  );
};

export default CustomDatePicker;

