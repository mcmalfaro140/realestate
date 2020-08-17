import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import SplitButton from "react-bootstrap/SplitButton";
import { useInput } from "../components/input-hook";
import DropDown from "../components/dropdown";

const min_list = ["300", "400", "500", "600"];
const max_list = ["600", "900", "100000", "1700000"];
const beds_list = ["2", "3", "4", "5"];
const baths_list = ["1", "2", "3", "4"];
function SearchBar() {
  const { value: city, bind: bindcity, reset: resetcity } = useInput("");
  // const { value: min, bind: bindmin, reset: resetmin } = useInput("");
  console.log(city);

  const [minprice, MinDropDown] = DropDown("Min Price", "", min_list);
  const [maxprice, MaxDropDown] = DropDown("Max Price", "", max_list);
  const [beds, BedsDropDown] = DropDown("Beds", "", beds_list);
  const [baths, BathDropDown] = DropDown("Baths", "", baths_list);

  const handleSearch = (event) => {
    alert(
      `I am looking for houses in ${city} area with ${minprice} ${maxprice} ${beds} ${baths}`
    );
  };

  return (
    <div className="search_bar">
      <div>
        <input placeholder="Search by city" {...bindcity}></input>
        <span>
          <button onClick={handleSearch}>Search</button>
        </span>
      </div>
      <div>
        <MinDropDown />
        <MaxDropDown />
        <BedsDropDown />
        <BathDropDown />
      </div>
    </div>
  );
}

export default SearchBar;
