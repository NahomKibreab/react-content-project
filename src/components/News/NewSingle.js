import React from "react";
import { UserConsumer } from "../App";
import { ThemeConsumer } from "../App";

const NewSingle = ({ item }) => (
  <UserConsumer>
    {({ name, toggelName }) => (
      <ThemeConsumer>
        {({ style }) => (
          <div style={{ style, flex: 1 }} onClick={toggelName}>
            <div className="card">
              <div className="card-image">
                <img src={item.urlToImage} alt={item.title} />
                <span className="card-title">{name}</span>
              </div>
              <div className="card-content">
                <p>{item.title}</p>
              </div>
              <div className="card-action">
                <a href={item.url} rel="noopener noreferrer" target="_blank">
                  Full article
                </a>
              </div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    )}
  </UserConsumer>
);

export default NewSingle;
