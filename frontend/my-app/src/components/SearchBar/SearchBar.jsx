import React from 'react'

const SearchBar = ( {value, onChange, handleSearch, onClearSearch }) => {
    return(
        <div>
            <input
             type="text"
             placeholder="Search Notes"
             className="w-full text-xs bg-transparentm py-[11px] outline-none"
             value={value} 
             onChange={onChange}
             /> 
        </div>
    )
}

export default SearchBar