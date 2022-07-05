import SearchIcon from "@mui/icons-material/Search";
import searchStyles from "./SearchBar.module.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
    const [inputData, setInputData] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch("/api/product").then((Response) =>
            Response.json().then((data) => setItemList(data.data))
        );
    }, []);

    const handleChange = (event) => {
        /*Handling the change in inputValue when the user types in the searchbar*/
        setNotFound(false);
        const wordEntered = event.target.value.trim();
        setInputData(wordEntered);
        const newFilter = itemList.filter((value) => {
            return value.title
                .toLowerCase()
                .includes(wordEntered.toLowerCase());
        });

        setFilteredItems([]);
        if (newFilter.length > 0) {
            setFilteredItems(newFilter);
        }
        if (wordEntered.length === 0) {
            setFilteredItems([]);
        }
    };

    const buttonSubmit = () => {
        /*Submitting the searched movie*/
        let flag = false;
        let searchItem = {};
        for (let item of itemList) {
            if (inputData.toLowerCase() === item.title.toLowerCase()) {
                searchItem = item;
                flag = true;
                break;
            }
        }
        if (flag) {
            navigate(`/itemPage/${searchItem._id}`);
        } else {
            setNotFound(true);
        }
    };
    const EnterSubmit = () => {
        if (filteredItems.length > 0) {
            navigate(`/itemPage/${filteredItems[0]._id}`);
        } else {
            setNotFound(true);
        }
    };
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
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                EnterSubmit();
                            }
                        }}
                    />

                    {/* <button className={searchStyles.searchButton}>
                        <SearchIcon fontSize="small" />
                    </button> */}
                </div>
                <div className={searchStyles.category} onClick={buttonSubmit}>
                    Search
                </div>
            </div>

            {notFound ? <div>Sorry! This item is not found.</div> : null}
            {filteredItems.length > 0 ? (
                <div>
                    {filteredItems.slice(0, 10).map((item) => (
                        <div
                            onClick={() => navigate(`/itemPage/${item._id}`)}
                            key={item._id}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default SearchBar;
