import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

//icon
import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

//css
// import "../../assets/css/header.css";

//redux store
import { history } from "../..";
import { DispatchType, RootState } from "../../redux/configStore";
import positionReducer, { getAllPosition } from "../../redux/reducers/positionReducer";
import { getRoomById } from "../../redux/reducers/roomReducer";
import { ViTriViewModel } from '../../models/ViTriModel';

type Props = {}

const HeaderComponent = (props: Props) => {
  const dispatch: DispatchType = useDispatch()
  const { allPosition } = useSelector((state: RootState) => state.positionReducer)

  const [open, setOpen] = useState<boolean>(false);

  // State lưu giữ các giá trị: location, guest, date
  const [guest, setGuest] = useState<number>(0)
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [search, setSearch] = useState<string>("");
  const [locationId, setLocationId] = useState<number>(0);
  // Handle select number of guests
  const handleSelectGuest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGuest(value as unknown as number)
  };

  // Handle select date
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Search location
  const onSearch = (searchTerm: string, id: number) => {
    setSearch(searchTerm);
    setLocationId(id)
  };

  // Capitalize string
  const capitalizeString = (str: string) => {
    const words = str.split(" ");
    const res = words?.map((word: string) => {
      console.log(word)
      return word[0]?.toUpperCase() + word?.substring(1);
    }).join(" ");
    return res;
  }


  useEffect(() => {
    dispatch(getAllPosition());
  }, []);

  const handleShowLocation = () => {
    dispatch(getAllPosition())
    setOpen(!open);
  }

  const handleGetRoomByPos = (locationId: number) => {
    dispatch(getRoomById(locationId))
  }
  return (
    <div className="searchBar">
      <div className="destinationInput">
        <label htmlFor="city">Choose location:</label>
        <div className="searchBar-input searchBar-input-customSearch">
          <input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            placeholder="Where are you going"
            className="position_input"
          />
          {search === "" ? (
            <GrLocation className="icon" onClick={handleShowLocation} />
          ) : (
            <AiOutlineClose className="icon" onClick={() => setSearch("")} />
          )}
          {/* Render search position list */}
          {/* {
            <div className="dataResult"> */}
          {
            search.length === 0 && open ? allPosition.map((item: ViTriViewModel) => {
              return (
                <div
                  key={item.id}
                  className="dataItem"
                  onClick={() => onSearch(item.tenViTri, item.id)}
                >
                  <CiLocationOn
                    className="icon"
                    style={{ fontSize: "1.2rem" }}
                  />
                  {capitalizeString(item.tenViTri)?.length > 10 ? capitalizeString(item.tenViTri)?.substring(0, 10) : capitalizeString(item.tenViTri)}
                </div>
              );
            }) : (allPosition
              ?.filter((data: ViTriViewModel) => {
                const searchTerm = search.toLowerCase();
                const province = data.tenViTri.toLowerCase();

                return (
                  searchTerm &&
                  province.startsWith(searchTerm) &&
                  province !== searchTerm
                );
              })
              .map((item: ViTriViewModel) => {
                return (
                  <div
                    key={item.id}
                    className="dataItem"
                    onClick={() => onSearch(item.tenViTri, item.id)}
                  >
                    <CiLocationOn
                      className="icon"
                      style={{ fontSize: "13px" }}
                    />
                    {capitalizeString(item.tenViTri)?.length > 10 ? capitalizeString(item.tenViTri)?.substring(0, 10) + '...' : capitalizeString(item.tenViTri)}
                  </div>
                );
              }))
          }

          {/* </div>
          } */}
        </div>
      </div>
      <div className="dateInput">
        <label htmlFor="date">Departure day:</label>
        <div className="searchBar-input searchBar-input-custom text-center">
          <ReactDatePicker
            selected={startDate}
            onChange={onChange}
            placeholderText="Date Time"
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            minDate={moment().toDate()}
          />
        </div>
      </div>
      <div className="guestInput">
        <label htmlFor="guest">Number of guest: {guest}</label>
        <div className="searchBar-input">
          {/* <div className="guest">
            <Dropdown align="end">
              <Dropdown.Toggle className="flex user">
                <p>Guest</p>
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-2 dropDownMenu">
                <div className="range">
                  <p>Guests:</p>
                  <div className="numOfGuest">
                    <button
                      onClick={() => {
                        setGuest((prev: number) => prev + 1);
                      }}
                    >
                      +
                    </button>
                    <span>{guest}</span>
                    <button
                      onClick={() => {
                        if (guest === 0) return;
                        setGuest((prev: number) => prev - 1);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            id="customRange2"
            value={guest}
            onChange={handleSelectGuest}
          />
        </div>
      </div>

      {/* truyền props sang page search  */}
      {/* <Link
        to={`/search/${locationId}`}
        state={{
          position: search,
          startDate,
          endDate,
          guest: Number(guest),
        }}
        onClick={() => handleGetRoomByPos(locationId)}
        className="searchIconDiv"
      >
        <AiOutlineSearch className="icon" />
      </Link> */}
    </div >
  )
}

export default HeaderComponent
