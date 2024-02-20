import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedMoney from "./FormattedMoney";

class ExpenseEntryItem extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <b>Item:</b> <em>{this.props.item.name}</em>
          </div>
          <div>
            <b>Amount:</b>
            <em>
              <FormattedMoney value={this.props.item.amount} />
            </em>
          </div>
          <div>
            <b>Spend Date:</b>
            <em>
              <FormattedDate value={this.props.item.spendDate} />
            </em>
          </div>
          <div>
            <b>Category:</b>
            <em>{this.props.item.category}</em>
          </div>
        </div>
      </div>
    );
  }
}
export default ExpenseEntryItem;
