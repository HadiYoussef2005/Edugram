import { useState, ChangeEvent } from 'react';

export default function Navbar(){
    const [search, setSearch] = useState("");
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return(
    <div className="navbar">
        <form className="form">
            <input
                className="searchbar"
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange} />
        </form>
    </div>
)
}