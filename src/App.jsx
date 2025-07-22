import React, { useState, useEffect } from "react";
import Recordlogo from "./assets/icons/Record.png";
import Editlogo from "./assets/icons/Editing.png";
import LiveStreamlogo from "./assets/icons/Livestream.png";
import webinarlogo from "./assets/icons/Webinar.png";
import Transcribelogo from "./assets/icons/Transcribe.png";
import Magicclipslogo from "./assets/icons/Magicclips.png";
import Captionslogo from "./assets/icons/Captions.png";
import magicaudiologo from "./assets/icons/Magic Audio.png";
import HeaderVideo from "./assets/videos/Header_video.mp4";
import Arrow from "./assets/icons/arrow.png";
import Male_ch from "./assets/images/male.png";
import Female_ch from "./assets/images/female.png";

const App = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleMouseEnter = () => setIsProductOpen(true);
  const handleMouseLeave = () => setIsProductOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName("header")[0];
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <a href="#default" className="logo">
            Countryside
          </a>

          {/* Product Dropdown */}
          <div className="product-dropdown">
            <div
              className="dropdown-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="product-trigger">
                <span>Product</span>
                <span className={`arrow ${isProductOpen ? "rotated" : ""}`}>
                  <img src={Arrow} alt="arrow" width="13" height="15" />
                </span>
              </div>

              <div className={`dropdown-panel ${isProductOpen ? "show" : ""}`}>
                <div className="dropdown-section products">
                  <p className="section-title">Products</p>
                  <div className="item">
                    <img src={Recordlogo} alt="Record" />
                    <div>
                      <p className="item-title">Recording</p>
                      <p className="item-subtext">
                        4K video and audio recorder
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <img src={Editlogo} alt="Editing" />
                    <div>
                      <p className="item-title">Editing</p>
                      <p className="item-subtext">
                        AI, text-based video editor
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <img src={LiveStreamlogo} alt="Live Stream" />
                    <div>
                      <p className="item-title">Live Streaming</p>
                      <p className="item-subtext">For livestreams in full HD</p>
                    </div>
                  </div>
                  <div className="item">
                    <img src={webinarlogo} alt="Webinars" />
                    <div>
                      <p className="item-title">Webinars</p>
                      <p className="item-subtext">
                        Host, record, and repurpose
                      </p>
                    </div>
                  </div>
                </div>

                <div className="dropdown-section features">
                  <p className="section-title">Features</p>
                  <div className="item">
                    <img src={Transcribelogo} alt="Transcribing" />
                    <p className="item-title">Transcribing</p>
                  </div>
                  <div className="item">
                    <img src={Magicclipslogo} alt="Magic Clips" />
                    <p className="item-title">Magic Clips</p>
                  </div>
                  <div className="item">
                    <img src={Captionslogo} alt="Captions" />
                    <p className="item-title">Captions</p>
                  </div>
                  <div className="item">
                    <img src={magicaudiologo} alt="Magic Audio" />
                    <p className="item-title">Magic Audio</p>
                  </div>
                </div>

                <div className="dropdown-section apps">
                  <p className="section-title">Apps</p>
                  <div className="item">
                    <p className="item-title">Mac App</p>
                  </div>
                  <div className="item">
                    <p className="item-title">Mobile Apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <div className="nav-trigger">
              <span>Solutions</span>
              <span className={`arrow ${isSolutionsOpen ? "rotated" : ""}`}>
                <img src={Arrow} alt="arrow" width="13" height="15" />
              </span>
            </div>

            <div className={`dropdown-panel ${isSolutionsOpen ? "show" : ""}`}>
              <div className="dropdown-section">
                <p className="section-title">For</p>
                <div className="item">
                  <span>🎙️</span>
                  <p className="item-title">Podcasters</p>
                </div>
                <div className="item">
                  <span>📢</span>
                  <p className="item-title">Producers</p>
                </div>
                <div className="item">
                  <span>👥</span>
                  <p className="item-title">Marketers</p>
                </div>
              </div>

              <div className="dropdown-section">
                <p className="section-title">Use cases</p>
                <div className="item">
                  <span>🎧</span>
                  <p className="item-title">Podcasts</p>
                </div>
                <div className="item">
                  <span>🎥</span>
                  <p className="item-title">Webinars</p>
                </div>
                <div className="item">
                  <span>💬</span>
                  <p className="item-title">Internal communications</p>
                </div>
                <div className="item">
                  <span>📺</span>
                  <p className="item-title">Video marketing</p>
                </div>
                <div className="item">
                  <span>📚</span>
                  <p className="item-title">Learning & development</p>
                </div>
                <div className="item">
                  <span>🎤</span>
                  <p className="item-title">Virtual conferences</p>
                </div>
              </div>
            </div>
          </div>
          {/* resources */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <div className="nav-trigger">
              <span>Resources</span>
              <span className={`arrow ${isResourcesOpen ? "rotated" : ""}`}>
                <img src={Arrow} alt="arrow" width="13" height="15" />
              </span>
            </div>

            <div className={`dropdown-panel ${isResourcesOpen ? "show" : ""}`}>
              <div className="dropdown-section">
                <p className="section-title">Learn</p>
                <div className="item">
                  <span>🎙️</span>
                  <p className="item-title">Blog</p>
                </div>
                <div className="item">
                  <span>📢</span>
                  <p className="item-title">Free tools</p>
                </div>
                <div className="item">
                  <span>👥</span>
                  <p className="item-title">Webinars</p>
                </div>
              </div>

              <div className="dropdown-section">
                <p className="section-title">Community</p>
                <div className="item">
                  <span>🎧</span>
                  <p className="item-title">Case Studies</p>
                </div>
                <div className="item">
                  <span>🎥</span>
                  <p className="item-title">Community Hub</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#business" className="business">
            For Business
          </a>
          <a href="#pricing" className="pricing">
            Pricing
          </a>
        </div>

        <div className="header-right">
          <a href="#sales" className="sales">
            Contact Sales
          </a>
          <a href="#login" className="login">
            Login
          </a>
          <a href="#free" className="start">
            Start for Free
          </a>
        </div>
      </div>

      <div className="video-container">
        <video
          src={HeaderVideo}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            aspectRatio: "1920 / 708",
            objectFit: "cover",
          }}
        />
        <div className="video-overlay">
          <h1>
            Create your <br />
            best content yet.
          </h1>
          <p>
            Your online studio to record in high quality, edit in a flash, and
            go live with a bang.
          </p>
          <button className="start-button">Start for Free</button>
        </div>
      </div>

      <div className="mids">
        <div className="mid-sec">
          <p id="recordit">Record it.</p>
          <p id="desc">
            Studio-quality, separate audio and video tracks for each
            <br />
            &nbsp;&nbsp;participant, thanks to our local recording technology.
          </p>
          <button className="mid-button">Start for Free</button>
          <a href="#learnmore" id="learnmore">
            Learn more&nbsp;&#8594;
          </a>
        </div>
        <div className="mid-screen">
          <div className="video-call-frame">
            <img id="cam-img" src="https://cdn.prod.website-files.com/5f996b22b00afe35a55e6f79/666fcc407e094a90be500a49_camera-svg.svg" alt="cam" />
            <div className="rec-indicator">
              <span className="dot" /> REC
            </div>
            <div className="participant left">
              <img src={Female_ch} alt="Left participant" />
            </div>
            <div className="participant right">
              <img src={Male_ch} alt="Right participant" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <p>Take it from here.</p>
          <p>
            <b>Start creating with Countryside</b>
          </p>
        </div>
        <div id="footer-button-wrapper">
          <button>Start for Free</button>
          <p>*No credit card needed.An open source project.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
