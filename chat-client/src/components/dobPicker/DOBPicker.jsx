import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getZodiacSign from "../../utils/getZodiacSign";
import "../../styles/datePicker.css";


export default function DOBPicker({selectedDate, onDateChange}) {

    const currentYear = new Date().getFullYear();
    const startYear = 1944;
    const yearRange = currentYear - startYear + 1;

    const zodiac = selectedDate
    ? getZodiacSign(selectedDate.getMonth() + 1, selectedDate.getDate())
    : "";

    return (
      <div className="relative w-full">
        <DatePicker
          selected={selectedDate}
          onChange={onDateChange}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select your birthdate"
          showYearDropdown
          dateFormatCalendar="MMMM"
          scrollableYearDropdown
          yearDropdownItemNumber={yearRange}
          minDate={new Date(1944, 0, 1)}
          maxDate={new Date(currentYear, 11, 31)}
          className="input input-bordered w-full pr-14 bg-purple-200 border-purple-400
          placeholder-purple-500 placeholder:tracking-tight text-purple-950 h-10
          border-opacity-70"
        />
        {zodiac && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-purple-700 pointer-events-none">
            {zodiac.split(" ")[1]}
          </span>
        )}
      </div>
    );
  }
  