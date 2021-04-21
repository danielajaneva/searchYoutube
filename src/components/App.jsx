import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtubeAPI from "../APIs/youtubeAPI";

class App extends React.Component {
  state = { videosResult: [], selectedVideoItem: null };

  //default search
  componentDidMount() {
    this.onSearchSubmit("architecture");
  }

  onSearchSubmit = async (searchState) => {
    //console.log(event);
    const response = await youtubeAPI.get("/search", {
      params: {
        q: searchState,
      },
    });
    this.setState({
      videosResult: response.data.items,
      // show the first video at the VideoDeatail
      selectedVideoItem: response.data.items[0],
    });
    console.log(response.data.items);
  };

  onVideoItemClick = (video) => {
    this.setState({ selectedVideoItem: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar invokeValueForInput={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            {/* You have found {this.state.videosResult.length} videos. */}
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideoItem} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoItemClick={this.onVideoItemClick}
                videos={this.state.videosResult}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
