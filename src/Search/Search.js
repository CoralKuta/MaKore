import { useRef } from 'react';

//this is the search component to search a specific chat
function Search({ doSearch }) {
    const searchBox = useRef(null);
    //call the search function with the value that we are want to search
    const search = function () {
        doSearch(searchBox.current.value);
    }

    return (
        <div className="searchChat">
            <i className="bi-search"></i>
            <input ref={searchBox} onKeyUp={search} type="text" placeholder="Search for a chat"></input>
        </div>
    );
}

export default Search;