import React from "react";
import { Select } from "@shopify/polaris";

export default class SelectExample extends React.Component {
  state = {
    selected: "none"
  };

  handleChange = newValue => {
    this.setState({ selected: newValue });
  };

  render() {
    const options = [
      { label: "None", value: "none" },
      { label: "Title", value: "title" },
      { label: "Vendor", value: "vendor" },
      { label: "Something", value: "something" }
    ];

    return (
      <Select
        label="Sort by:"
        options={options}
        onChange={this.handleChange}
        value={this.state.selected}
      />
    );
  }
}
