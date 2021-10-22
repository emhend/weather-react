import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  let month = props.date.getMonth();
  let year = props.date.getYear();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {month}/{day}/{year} {hours}:{minutes}
    </div>
  );
}
