import React from 'react';

const SearchBar = () => {
    return (
        <div class="right item">
            <div class="ui action input">
            <input type="text" placeholder="Search..." />
            <button type="submit" class="ui button">Go
            </button>
            </div>
        </div>
    )
}


export default SearchBar;