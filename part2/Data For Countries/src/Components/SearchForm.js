import React from 'react';

function SearchForm({searchValue, handleChange}) {
    return (
        <form>
            <label>Find Countries: </label><input value={searchValue} onChange={handleChange}/>
        </form>
    );
}

export default SearchForm;