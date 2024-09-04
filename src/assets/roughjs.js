const mobileMenuToggle = document.querySelector(".mobile-toggle");
const navElementChildren = document.querySelectorAll("nav a");
const pageData = {
  usersExperiences: [
    {
      reviewerName: "Gilbert Harbert",
      reviewerPhoto: "./assets/images/gilbert-dp.svg",
      portfolio: "CEO, NoonBrew",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
    },

    {
      reviewerName: "Vincent McSabbu",
      reviewerPhoto: "./assets/images/vincent-dp.svg",
      portfolio: "Marketing & Office Coordinator",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Division of Labor's creative ideas were great, and working with their team was truly easy they were very responsive.",
    },

    {
      reviewerName: "Robert Hart",
      reviewerPhoto: "./assets/images/robert-dp.svg",
      portfolio: "Owner, Beards of Men",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets.",
    },
    {
      reviewerName: "Gilbert Harbert",
      reviewerPhoto: "./assets/images/gilbert-dp.svg",
      portfolio: "CEO, NoonBrew",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
    },

    {
      reviewerName: "Vincent McSabbu",
      reviewerPhoto: "./assets/images/vincent-dp.svg",
      portfolio: "Marketing & Office Coordinator",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive.",
    },

    {
      reviewerName: "Robert Hart",
      reviewerPhoto: "./assets/images/robert-dp.svg",
      portfolio: "Owner, Beards of Men",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets.",
    },
    {
      reviewerName: "Gilbert Harbert",
      reviewerPhoto: "./assets/images/gilbert-dp.svg",
      portfolio: "CEO, NoonBrew",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
    },

    {
      reviewerName: "Vincent McSabbu",
      reviewerPhoto: "./assets/images/vincent-dp.svg",
      portfolio: "Marketing & Office Coordinator",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive.",
    },

    {
      reviewerName: "Robert Hart",
      reviewerPhoto: "./assets/images/robert-dp.svg",
      portfolio: "Owner, Beards of Men",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets.",
    },
    
    {
      reviewerName: "Vincent McSabbu",
      reviewerPhoto: "./assets/images/vincent-dp.svg",
      portfolio: "Marketing & Office Coordinator",
      reviewerRating: {
        excellent: 4,
        poor: 1,
      },
      review:
        "Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive.",
    },
  ],
};

// Manages Mobile Menu Toggles
mobileMenuToggle.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector(".icon-menu").classList.toggle("active");
  document.querySelector(".icon-close-menu").classList.toggle("active");
});

// Manages Mobile Menu Toggles
for (let num = 0; num < navElementChildren.length; num++) {
  navElementChildren[num].addEventListener("mouseup", () => {
    document.querySelector("nav").classList.toggle("active");
    document.querySelector(".icon-menu").classList.toggle("active");
    document.querySelector(".icon-close-menu").classList.toggle("active");
  });
}

// Manages Mobile Menu Toggles
document.addEventListener("click", (event) => {
  const mobileMenu = document.querySelector("nav");
  const innerMobileMenu = document.querySelector(".nav-ul");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const faq = document.querySelectorAll(".question");

  if (
    !mobileMenu.contains(event.target) &&
    !innerMobileMenu.contains(event.target) &&
    mobileMenu.classList.contains("active") &&
    !mobileMenuToggle.contains(event.target)
  ) {
    mobileMenu.classList.remove("active");
    document.querySelector(".icon-menu").classList.toggle("active");
    document.querySelector(".icon-close-menu").classList.toggle("active");
  }

  for (let num = 0; num < faq.length; num++) {
    if (faq[num].contains(event.target)) {
      var targetAns = document.querySelector("#answer" + num);
      var plusMinusSign = document.querySelector("#sign" + num);
      if (targetAns.classList.contains("ans-active")) {
        targetAns.classList.remove("ans-active");
        plusMinusSign.innerHTML = "+";
      } else {
        targetAns.classList.add("ans-active");
        plusMinusSign.innerHTML = "-";
        plusMinusSign.classList.add("bolder-sign");
      }
    }
  }
});


document.addEventListener("DOMContentLoaded", () => {
  let testimonialsCount = 0;
  let slideIndicators = Array.from(
    document.querySelectorAll(".t-indicators div")
  );
  let testimonialSliderIndicators = document.getElementById("t-indicators");
  const testimonialsTrack = document.querySelector(".testimonials-track");
  
  // Manages the rendering of the Testimonials section
  const testimonialsProtocol = () => {
    testimonialsTrack.innerHTML = "";
    testimonialSliderIndicators.innerHTML = "";
    let indicatorCount = 1;

    // Returns 10 if the number of available testimonials is greater than 10, otherwise just return the number of available testimonials.
    const requiredNum = () => {
      let num = pageData["usersExperiences"].length;
      if (pageData["usersExperiences"].length > 10){
        num = 10;
      } 
      return num;
    }

    // creates between 0 and 10 indicator elemnts depending on the value returned by requiredNum function above.
    for (let seq = 0; seq < requiredNum(); seq++){
      const testimonialSliderIndicator = document.createElement("div");
      const testimonialSliderIndicatorText = document.createElement("p");
      testimonialSliderIndicatorText.textContent = indicatorCount;
      testimonialSliderIndicator.className = "t-indicator";
      testimonialSliderIndicator.id = `t-indicator-${indicatorCount - 1}`;

      testimonialSliderIndicator.appendChild(testimonialSliderIndicatorText);
      testimonialSliderIndicators.appendChild(testimonialSliderIndicator);
      indicatorCount++;
    }

    // Renders the most recent testimonials (number depends on the value returned by requiredNum).
    pageData["usersExperiences"]
      .slice(testimonialsCount, requiredNum())
      .forEach((testimonial) => {
        const testimonialDiv = document.createElement("div");
        const textDiv = document.createElement("div");
        const quotationImg = document.createElement("img");
        const reviewTxt = document.createElement("p");
        const bioDiv = document.createElement("div");
        const photoWrapper = document.createElement("div");
        const photo = document.createElement("img");
        const reviewSpan = document.createElement("span");
        const reviewerName = document.createElement("p");
        const reviewerPortfolio = document.createElement("p");

        testimonialDiv.className = "testimonial";
        textDiv.className = "testimonial-text-div";
        bioDiv.className = "reviewerDiv";
        photoWrapper.className = "reviewer-photo-wrapper";
        quotationImg.className = "quotation-mark-icon";
        quotationImg.src = "./assets/images/quotation-mark.svg";
        reviewTxt.textContent = testimonial["review"];
        photo.src = testimonial["reviewerPhoto"];
        reviewerName.textContent = testimonial["reviewerName"];
        reviewerPortfolio.textContent = testimonial["portfolio"];

        textDiv.appendChild(quotationImg);
        textDiv.appendChild(reviewTxt);

        reviewSpan.appendChild(reviewerName);
        reviewSpan.appendChild(reviewerPortfolio);
        photoWrapper.appendChild(photo);
        bioDiv.appendChild(photoWrapper);
        bioDiv.appendChild(reviewSpan)

        testimonialDiv.appendChild(textDiv);
        testimonialDiv.appendChild(bioDiv);
        testimonialsTrack.appendChild(testimonialDiv);
      });

    testimonialSliderIndicators = document.getElementById("t-indicators");
    slideIndicators = Array.from(
      document.querySelectorAll(".t-indicators div")
    );
    slideIndicators.forEach((indicator) => {
      // const indicatorElem = document.getElementById(indicator.id);
      indicator.classList.remove("active");
    });

    const testimnlChildren = testimonialSliderIndicators.children;
    console.log(testimnlChildren[testimonialsCount]);
    testimnlChildren[testimonialsCount].classList.add("active");
  };

  document.addEventListener("click", (event) => {
    let indicatorIndexes = document.querySelectorAll(".t-indicators div");
    indicatorIndexes.forEach((index) => {
      if (index.contains(event.target)) {
        indicatorIndexes.forEach((indexed) => {
          indexed.classList.remove("active");
        });
        const indexId = index.id;
        const slicedIndex = indexId.split("t-indicator-");
        testimonialsCount = slicedIndex[slicedIndex.length - 1];
        console.log(testimonialsCount);
        testimonialsProtocol();
      }
    });
  });

  testimonialsProtocol();

  const testimonialCarouselSlider = () => {
    testimonialsProtocol();
    if (testimonialsCount < pageData["usersExperiences"].length - 1) {
      testimonialsCount++;
    } else {
      testimonialsCount = 0;
      testimonialCarouselSlider();
    }
    console.log(testimonialsCount);
  };

  testimonialCarouselSlider();

  setInterval(testimonialCarouselSlider, 20000);
});