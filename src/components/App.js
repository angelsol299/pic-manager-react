import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = term => {
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization:
          "Client-ID 62ac3ef66258fac175e0a0dd288103288b33d69d1ba6664e42d50df634c03c0b"
      }
    });
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
