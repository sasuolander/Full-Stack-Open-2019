import React from "react";

export const AddRecord = ({ onClick, onChangeName,onChangePhonenumber,phonenumber,name }) => {
  return (
    <div>
      <form className="form">
        <div className="field-element">
          <label>name</label> <input onChange={onChangeName} id="name" value={name} />
          <br />
        </div>
        <div className={"field-element2"}>
          <label>phone number </label> <input onChange={onChangePhonenumber} id="phonenumber" value={phonenumber} />
        </div>
        <br />
        <button onClick={onClick}>submit</button>
      </form>
    </div>
  );
};
