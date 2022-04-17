import { useRef } from 'react';

function Search({ doSearch }) {
    const searchBox = useRef(null);
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