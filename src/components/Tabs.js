import React from "react";
import ShowResponse from "./ShowResponse";
import "bootstrap/dist/css/bootstrap.min.css";
class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      showQurey: true,
      showHeader: false,
      showjson: false,
    };
  }
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${this.state.showQurey ? "active" : ""}`}
              id="query-params-tab"
              data-bs-toggle="tab"
              data-bs-target="#query-params"
              type="button"
              role="tab"
              aria-controls="query-params"
              aria-selected="true"
              onClick={() => {
                this.setState({
                  showQurey: true,
                  showHeader: false,
                  showjson: false,
                });
              }}
            >
              Query Params
            </button>
            {/*aria-controls = = It will be controlling the elements with id = "query-params"  */}
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${this.state.showHeader ? "active" : ""}`}
              id="request-headers-tab"
              data-bs-toggle="tab"
              data-bs-target="#request-headers"
              type="button"
              role="tab"
              aria-controls="request-headers"
              aria-selected="false"
              onClick={() => {
                this.setState({
                  showQurey: false,
                  showHeader: true,
                  showjson: false,
                });
              }}
            >
              Headers
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${this.state.showjson ? "active" : ""}`}
              id="json-tab"
              data-bs-toggle="tab"
              data-bs-target="#json"
              type="button"
              role="tab"
              aria-controls="json"
              aria-selected="false"
              onClick={() => {
                this.setState({
                  showQurey: false,
                  showHeader: false,
                  showjson: true,
                });
              }}
            >
              JSON
            </button>
          </li>
        </ul>
        <ShowResponse showWhat={this.state} />
      </div>
    );
  }
}

export default Tabs;
