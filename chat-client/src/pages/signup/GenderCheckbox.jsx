import React from 'react'

export default function GenderCheckbox({onCheckboxChange, selectedGender}) {
  return (
    <div className='flex justify-around mt-1.5'>
      <div className='form-control'>
        <label 
        className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <input
                type='checkbox'
                className='checkbox border-x-purple-900'
                checked={selectedGender === "female"}
                onChange={() => onCheckboxChange("female")}
                 />
            <span className='label-text text-white'>Female</span>
        </label>
      </div>
      <div className='form-control'>
        <label 
        className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <input
                type='checkbox'
                className='checkbox border-x-purple-900'
                checked={selectedGender === "male"}
                onChange={() => onCheckboxChange("male")} 
                />
            <span className='label-text text-white'>Male</span>
        </label>
      </div>
    </div>
  )
}

