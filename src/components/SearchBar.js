import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  // another way to solve issues of event handler not binding 'this' from functions:
  // Error would look something like ... TypeError: Cannot read property 'props' of undefined
  //  use a fat arrow function, pass in the event as an argument when passing the function as a prop down like in the onChange function for the input field
  // OR ANOTHER WAY
  // constructor(){
  //   this.term = this.term .bind(this);
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
