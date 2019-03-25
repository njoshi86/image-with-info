import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import fetch from "node-fetch";

class Profile extends Component {
  static PropTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
  };
  render() {
    const { img, title, link } = this.props;
    return (
      <div className="container">
        <a href={link} target="_blank">
          <img src={img} className="image" />
          <div className="title background">{title}</div>
        </a>
      </div>
    );
  }
}

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url =
      "https://search-staging.platform.hoodline.com/v0.1/public/posts?query=https%3A%2F%2Fhoodline.com%2F2018%2F10%2Fproposed-23-story-multi-use-soma-tower-would-have-only-6-housing-units&case=citywide";
    fetch(url, {
      headers: {
        "content-type": "application/json",
        Authorization: "HOODLINE_TEST_TOKEN"
      }
    }).then(response => {
      response.json().then(data => {
        const result = data.result;
        this.setState({
          data: result
        });
      });
    });
  }
  render() {
    const { data } = this.state;
    if (data.length === 0) {
      return null;
    }
    return (
      <div data-elm-id="profiles-container" className="profiles-container">
        {data.map((d, index) => {
          return (
            <Profile
              key={index}
              img={d.media[0]["original_url"]["url"]}
              title={d.title}
              link={d.link}
            />
          );
        })}
      </div>
    );
  }
}

export default Profile;
export { Profiles };
