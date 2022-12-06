import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Accordion.css";
import DeleteSvgr from "./Svgr/Delete";
import EditSvgr from "./Svgr/Edit";
import Alert from "./Alert/Alert";
import { getAge } from "../utils/DateOfBirth";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/action/user";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopUP, setShowPopUp] = useState(false);
  const [editData, setEditData] = useState(false);
  const [userData, setUserData] = useState(props.user);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setShowPopUp(true);
  };

  const { id, first, last, dob, gender, picture, country, description } =
    props.user;
  return (
    <IconContext.Provider value={{ color: "#666", size: "25px" }}>
      <div className="accordionContainer">
        <div className="accordionBox">
          <div className="accordionHeader">
            <img className="profilePhoto" src={picture} alt="imge" />
            {!editData ? (
              <h1>
                {first} {last}
              </h1>
            ) : (
              <input
                type="text"
                value={`${userData.first} ${userData.last}`}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    first: e.target.value.split(" ")[0],
                    last: e.target.value.split(" ")[1],
                  })
                }
              />
            )}
          </div>
          <div className="Main" onClick={() => setIsOpen(!isOpen)}>
            <span>{isOpen ? <FiMinus /> : <FiPlus />}</span>
          </div>
        </div>
        {isOpen ? (
          <div>
            <div className="detailsBox">
              <div className="personData">
                <label>Age</label>
                {!editData ? (
                  <span>{getAge(dob)}</span>
                ) : (
                  <input
                    type="text"
                    value={userData.dob}
                    onChange={(e) =>
                      setUserData({ ...userData, dob: e.target.value })
                    }
                  />
                )}
              </div>
              <div className="personData">
                <label>Gender</label>
                {!editData ? (
                  <span>{gender}</span>
                ) : (
                  <select
                    value={userData.gender}
                    onChange={(e) =>
                      setUserData({ ...userData, gender: e.target.value })
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="rather not say">Rather not say</option>
                  </select>
                )}
              </div>
              <div className="personData">
                <label>Country</label>
                {!editData ? (
                  <span>{country}</span>
                ) : (
                  <input
                    type="text"
                    value={userData.country}
                    onChange={(e) =>
                      setUserData({ ...userData, country: e.target.value })
                    }
                  />
                )}
              </div>
            </div>
            <div className="personData descriptionBox">
              <label>Description</label>
              {!editData ? (
                <span>{description}</span>
              ) : (
                <textarea
                  rows="7"
                  cols="50"
                  onChange={(e) =>
                    setUserData({ ...userData, description: e.target.value })
                  }
                >
                  {userData.description}
                </textarea>
              )}

              <div className="editButton">
                {!editData ? (
                  <>
                    <button onClick={() => handleDelete()}>
                      <DeleteSvgr onClick={() => setShowPopUp(true)} />
                    </button>
                    <button
                      className="EditSvgr"
                      onClick={() => {
                        setEditData(true);
                      }}
                    >
                      <EditSvgr />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditData(false)}>❌</button>
                    <button
                      onClick={() => {
                        dispatch(updateUser(userData));
                        setEditData(false);
                      }}
                    >
                      ✔
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : null}
        <Alert
          isOpen={showPopUP}
          id={id}
          handleClose={() => setShowPopUp(false)}
        />
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
