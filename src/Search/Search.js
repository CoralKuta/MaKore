import {useRef} from 'react';

function Search ({doSearch}) {
    const searchBox = useRef(null);
    const search = function() {
        doSearch(searchBox.current.value);
    }

    return (
        <div>
        <input ref={searchBox} onKeyUp={search} type="text" placeholder="Search for a chat"></input>
        <i className="bi bi-search"></i>
      </div>
    );
}

export default Search;