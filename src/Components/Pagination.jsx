import { useRef, useState } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {
  let array = new Array(total).fill("");



  // console.log(array)
  return (
    <div className="pageContainer">
      <span>
        <button>&lt;</button>
      </span>
      {array.map((index, item) => {
        return <button key={item}>{item + 1}</button>
      })}
      <span>
        <button onClick={onPageChange}>&gt;</button>
      </span>
    </div>
  );
};
