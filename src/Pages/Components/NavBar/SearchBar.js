import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import searchStyles from "./SearchBar.module.css";
const SearchBar = () => {
    return (
        <div className={searchStyles.searchBody}>
            <div className={searchStyles.completeBar}>
                <div className={searchStyles.bar}>
                    <div className={searchStyles.searchButton}>
                        <SearchIcon fontSize="small" />
                    </div>
                    <input
                        placeholder={"Searching for ..."}
                        className={searchStyles.searching}
                        type="text"
                        title="Search"
                    />

                    {/* <button className={searchStyles.searchButton}>
                        <SearchIcon fontSize="small" />
                    </button> */}
                </div>
                <div className={searchStyles.category}>All Categories</div>
            </div>
        </div>
    );
};

export default SearchBar;
