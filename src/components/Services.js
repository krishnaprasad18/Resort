import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Free cocktails can be a fun way to enjoy a resort vacation and add to the overall experience, but it is important to read the fine print and be aware of any policies or guidelines related to alcohol consumption."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Endless hiking can be a great way to explore the surrounding area and get some exercise while enjoying the beauty of nature. ."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "A free shuttle service in a resort refers to a complimentary transportation service provided by the resort to transport guests to and from nearby attractions or destinations.."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "A resort may offer a selection of beers with varying strengths, including some specialty or craft beers that have higher ABV levels. The strongest beer available in the resort and  labeled as such on the menu or in the bar area."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
