import React from "react";

class SearchBar extends React.Component {
  state = { searchState: "" };
  onInputChange = (event) => {
    this.setState({ searchState: event.target.value });
  };

  //onFormSubmit e funkcija koja ja praka zapisanata vrednost
  //na searchState vo App.jsx kako property koj ima druga funkcija
  // koja praka request preku axios vo API
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.invokeValueForInput(this.state.searchState);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchState}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
