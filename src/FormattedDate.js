import React from "react";

class FormattedDate extends React.Component {
  constructor(props) {
    super();
  }
  format(value) {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    let parsed_date = new Date(Date.parse(value));
    let formatted_date =
      parsed_date.getDate() +
      "_" +
      months[parsed_date.getMonth()] +
      "_" +
      parsed_date.getFullYear();
    return formatted_date;
  }
  render() {
    return (
      <div>
        <span>{this.format(this.props.value)}</span>
      </div>
    );
  }
}

export default FormattedDate;
