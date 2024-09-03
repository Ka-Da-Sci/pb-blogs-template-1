const sections = [
    {
        title: "header",
        html: `<section id="header">
      <div class="header">
        <a href="./index.html" class="logo-brand-name">
          <img src="./assets/images/logo-without-name.svg" alt="logo" />
          <span>Logo</span>
        </a>
        <nav>
          <ul class="nav-ul">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./index.html#about-us">About Us</a></li>
            <li><a href="./index.html#hero">Blog</a></li>
            <li><a href="./index.html#newsletter">Contact</a></li>
          </ul>
        </nav>
        <div class="mobile-toggle">
          <img
            class="icon-menu"
            src="./assets/images/icon-menu.svg"
            alt="menu-toggle-icon"
          />
          <img
            class="icon-close-menu"
            src="./assets/images/icon-close-menu.svg"
            alt="menu-toggle-icon"
          />
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/.png",
    },
    
    {
        title: "hero",
        html: `<section id="hero">
      <div class="hero">
        <div id="hero-top" class="hero-top">
          <span class="hero-main-phrase">Get your all social service from  Our Site</span>
          <span class="hero-sub-phrase">Social media networks are open to all. Social media is typically used for social interaction and access to news and information, and decision making.</span>
        </div>
        <div id="hero-mid" class="hero-mid">
          <div class="hero-strt-free">
            <a href="./error404.html">Start Free Trial</a>
          </div>
          <div class="hero-demo">
            <img src="./assets/images/play-video-icon.svg" alt="play-video-icon">
            <a href="./error404.html">Watch A Demo</a>
          </div>
        </div>
        <div id="hero-bottom" class="hero-bottom">
          <div class="hero-rating">
            <img src="./assets/images/hero-stars.svg" alt="star-rating-icons">
            <span>4900+   5 Stars</span>
          </div>
          <div class="hero-main-ph">
            <img src="./assets/images/hero-main-image.png" alt="photo">
          </div>
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/hero.png",
    },
    
    {
        title: "intro",
        html: `<section id="intro">
      <div class="intro">
        <div class="intro-top">
          <h2 class="intro-top-main-phrase">Take the lead in smartly social media marketing</h2>
          <div class="intro-top-divs">
            <div class="intro-strategy">
              <img src="./assets/images/intro-strategy.svg" alt="photo">
              <h3>Social Media Strategy</h3>
              <p>A social media strategy is a summary of everything you plan to do and hope to achieve on social media.</p>
            </div>
            <div class="intro-market-plan">
              <img src="./assets/images/intro-market-plan.svg" alt="photo">
              <h3>Digital Marketing Plan</h3>
              <p>Digital marketing is important because it connects a business with its customers & is effective in all industries.</p>
            </div>
            <div class="intro-optimize">
              <img src="./assets/images/intro-seo.svg" alt="photo">
              <h3>Search Engine Optimization</h3>
              <p>Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines.</p>
            </div>
          </div>
        </div>
        <div class="intro-mid">
          <div class="years-of-experience">
            <p class="div-top">15</p>
            <p class="div-bottom">Years of experience</p>
          </div>
          <div class="social-followers">
            <p class="div-top">36k</p>
            <p class="div-bottom">Social followers</p>
          </div>
          <div class="projects-completed">
            <p class="div-top">6428</p>
            <p class="div-bottom">Projects completed</p>
          </div>
          <div class="social-profiles">
            <p class="div-top">92k</p>
            <p class="div-bottom">Social profiles</p>
          </div>
        </div>
        <div class="intro-bottom">
          <div class="bring-2geda">
            <img src="./assets/images/bring-2geda.png" alt="photo">
            <div class="bottom-inner-div">
              <h2>Bring your target users together on social media</h2>
              <p>Social media audience research isn’t complicated. It’s mainly about narrowing your focus while expanding your reach.</p>
              <p>We’ve created a free social media audience research template to help you keep track of all the information you learn as you conduct your research.</p>
            </div>
          </div>

          <div class="build-and-reach">
            <img src="./assets/images/build-and-reach.png" alt="photo">
            <div class="bottom-inner-div">
              <h2>Build your brand & reach out to social followers</h2>
              <p>Brand awareness is cited as the top priority for marketers, and social media channels are a one-to-many solution for getting the word out about your products and services. </p>
              <p>By creating a strong brand presence on social media, you can reach a broader audience & get partners brand advocates to post content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/intro.png",
    },
    
    {
        title: "about-us",
        html: `<section id="about-us">
      <div class="about-us">
        <h2>ABOUT US</h2>
        <div class="about-us-main">
          <div class="about-us-img">
            <img src="./assets/images/abt-us-image.png" alt="photo">
          </div>
          <div class="about-us-txt">
            <h3 >The easiest way to promote social media</h3>
            <span>
              <h4>Build A Community</h4>
              <p>Community building is a field of practices directed toward the creation or enhancement of community among individuals.</p>
            </span>
            <span>
              <h4>Video & Live Streaming</h4>
              <p>Connect your audio and video sources. This involves on audio and video sources to your main live streaming setup.</p>
            </span>
          </div>
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/about-us.png",
    },
    
    {
        title: "testimonials",
        html: `    <section id="testimonials">
      <div class="testimonials">
        <h2>User Experiences</h2>
        <div class="testimonials-track">

        </div>
      </div>
      
      <div class="testimonials-indicators-div">
        <div class="t-indicators" id="t-indicators">
          
        </div>
      </div>

    </section>`,
        image: "./assets/sections-screenshots/testimonials.png",
    },
    
    {
        title: "footer",
        html: `<section id="footer">
      <footer class="footer">
        <div class="newsletter-container">
          <div class="newsletter" id="newsletter">
            <h2>Newsletter</h2>
            <form class="newsletter-form" method="">
              <input id="email" type="email" name="email" placeholder="Your email" required/>
              <span class="error-message" id="error-message">Please enter a valid email address.</span>
              <button type="submit"><img src="./assets/images/customised-send-btn-icon.svg" alt="action-icon"></button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./index.html#testimonials">Experience</a>
            </li>
            <li>
              <a href="./index.html#about-us">About Us</a>
            </li>
            <li>
              <a href="./index.html#newsletter">Contact</a>
            </li>
          </ul>

          <div class="social-footer">
            <a class="fb-footer" href="./error404.html"><img src="./assets/images/facebook-icon.svg" alt="social-media-icon"></a>
            <a class="x-footer" href="./error404.html"><img src="./assets/images/twitter-icon.svg" alt="social-media-icon"></a>
            <a class="utube-footer" href="./error404.html"><img src="./assets/images/youtube-icon.svg" alt="social-media-icon"></a>
          </div>

          <p class="copyright-footer">© Copyright 2024 - Wivali</p>

        </div>
      </footer>
    </section>`,
        image: "./assets/sections-screenshots/footer.png",
    },
    
]