import SearchIcon from "@mui/icons-material/Search";
import searchStyles from "./SearchBar.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
                <div className={searchStyles.category}>
                    All Categories <KeyboardArrowDownIcon color="#495057" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
