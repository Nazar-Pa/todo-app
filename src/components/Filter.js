import React from 'react'

const Filter = ({value, handleChange}) => {

    

    return (
        
        <select value={value} onChange={(e) => handleChange(e.target.value)}
        className="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
        
    )
}

export default Filter
