import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "frontend",
  },
  {
    id: 3,
    text: "backend",
  },
  {
    id: 4,
    text: "hacking",
  },
  {
    id: 5,
    text: "full-stack",
  },
];

const allData = [
  {
    id: 1,
    title: "3D Covid 19 cases around the world",
    category: "frontend",
    image: "images/works/covid.png",
    popupLink: ["images/works/1.svg"],
    link: "https://c19.marciocastillo.com/",
  },
  {
    id: 2,
    title: "Ransomware Encryptor",
    category: "hacking",
    image: "images/works/encryption.jpeg",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
    link: "https://github.com/Marcioshub/encrypt-decrypt-py",
  },
  {
    id: 3,
    title: "Rate my recruiters",
    category: "full-stack",
    image: "images/works/recruiters.png",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
    link: "https://rmr.marciocastillo.com/",
  },
  {
    id: 4,
    title: "Parking Lot Inventory",
    category: "full-stack",
    image: "images/works/stlogo.png",
    popupLink: ["https://www.youtube.com/watch?v=qf9z4ulfmYw"],
    link: "https://stparkinglog.marciocastillo.com/",
  },
  {
    id: 5,
    title: "Alan AI News",
    category: "frontend",
    image: "images/works/alan-ai-logo.png",
    popupLink: [
      "https://www.youtube.com/watch?v=URVHRhBSjj8",
      "https://www.youtube.com/watch?v=qf9z4ulfmYw",
    ],
    link: "https://alanai.marciocastillo.com",
  },
  {
    id: 6,
    title: "Raspberry Pi Reverse Shell",
    category: "hacking",
    image: "images/works/rpi4.png",
    popupLink: ["images/works/5.svg"],
    link: "https://github.com/Marcioshub/reverse-ssh-shell",
  },
  {
    id: 7,
    title: "Raspberry Pi Worm",
    category: "hacking",
    image: "images/works/worm.png",
    popupLink: ["images/works/4.svg"],
    link: "https://github.com/Marcioshub/raspberry_pi_worm",
  },
  {
    id: 8,
    title: "Remote Access Tool (RAT)",
    category: "hacking",
    image: "images/works/rat.jpg",
    popupLink: ["images/works/4.svg"],
    link: "https://github.com/Marcioshub/rat",
  },
  {
    id: 9,
    title: "GIPHY Finder",
    category: "frontend",
    image: "images/works/giphy-logo.png",
    link: "https://marcioshub.github.io/random-gifs/",
  },
  {
    id: 10,
    title: "URL Shortener",
    category: "full-stack",
    image: "images/works/shorturl.png",
    link: "https://su.marciocastillo.com/",
  },
  {
    id: 11,
    title: "Python keylogger",
    category: "hacking",
    image: "images/works/keylogger.jpeg",
    link: "https://github.com/Marcioshub/keylogger",
  },
  {
    id: 12,
    title: "Chat Room App",
    category: "full-stack",
    image: "images/works/chatapp.png",
    popupLink: ["images/works/1.svg"],
    link: "https://chatapp.marciocastillo.com/",
  },
  {
    id: 13,
    title: "Codepen Clone",
    category: "frontend",
    image: "images/works/codepen.png",
    link: "https://condescending-lichterman-1908be.netlify.app/",
  },
  {
    id: 14,
    title: "Remote Control Code Finder",
    category: "frontend",
    image: "images/works/beam.png",
    link: "https://nifty-lovelace-be0886.netlify.app/",
  },
  {
    id: 15,
    title: "Sneaker Bot Demo",
    category: "backend",
    image: "images/works/supreme.png",
    popupLink: ["images/works/1.svg"],
    link: "https://github.com/Marcioshub/supreme-checkout",
  },
  {
    id: 16,
    title: "Crypto Ticker",
    category: "frontend",
    image: "images/works/crypto.png",
    popupLink: ["images/works/4.svg"],
    link: "https://reverent-fermi-266cc5.netlify.app/",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more projects"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
