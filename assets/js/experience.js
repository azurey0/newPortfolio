AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founding Data Scientist | Product Manager",
    cardImage: "assets/images/experience-page/easyshare.png",
    place: "Stealth Startup",
    time: "(July, 2023 - Present)",
    desp: "<li>An online C2C GPU and computing power rental marketplace.</li> <li>Defined product roadmap and requirement, prototyped product iteratively and supported development</li> <li>Defined data management strategy: market and user data collection, database management, data analysis process</li> <li>Support product funding process",
  },
  {
    title: "Analytics Engineer",
    cardImage: "assets/images/experience-page/flyr.jpg",
    place: "Flyr",
    time: "(Dec, 2023 - July, 2024)",
    desp: "<li>Enhanced PB and TB level data pipelines in production in dbt, Airflow, GCP</li> <li>Improved data and quality integity by refining SLAs, data quality tests in Argo, Monte Carlo</li> <li>Developed data monitoring strategy and improved data infrastructure with Terraform, Datadog, Airflow, CI/CD</li>",
  },
  {
    title: "Analyst, Data Science",
    cardImage: "assets/images/experience-page/justanswer.png",
    place: "JustAnswer",
    time: "(Aug, 2022 - Oct, 2023)",
    desp: "<li>Founding data analyst in a new business team</li><li>Built analytics infrastructures such as defining data metrics, writing data pipelines and building dashboards</li><li>Helped product feature launch with 10+ A/B tests and statistical inference.</li><li>Analyzed customer data and dialogue with multiple machine learning models and LLM, uncovered $2M opportunity",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/kuaishou.png",
    place: "Kuaishou",
    time: "(July, 20 - May, 21)",
    desp: "<li>Analyzed user behavior data for the worlds’ second largest short video platform to offer strategic recommendations</li><li>Developed root cause analysis of KPI changes by retrieving 2 billion user logs in Hive SQL and conducted in-depth market analysis</li><li>Utilized multivariate regression models to elucidate relationship between user social network and user engagement</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "ScentGPT",
    cardImage: "assets/images/experience-page/scentGPT.png",
    description:
      "As a perfume lover, I built a personalized perfume AI assistant available in GPT store with browsing and DALL·E Images",
    link:
      "https://chatgpt.com/g/g-tFBsvnYSj-scentgpt",
  },
  {
    title: "FANNG Stock Pipeline",
    cardImage: "assets/images/experience-page/datapipeline.gif",
    description:
      "An end-to-end data pipeline built with Spark, dbt, Airflow, Looker, Terraform in GCP environment",
    link:
      "https://github.com/azurey0/FANNG_stock_pipeline",
  },
  {
    title: "A pre-GPT Chatbot, 2020",
    cardImage: "assets/images/experience-page/chatbot.png",
    description:
      "A glance of Chatbot before GPT era: based on BERT and knowledge graph; deployed with Flask and Redis",
      link:
      "https://github.com/azurey0/webot",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, link }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle"><a href="${link}" target="_blank">${title}</a></h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "eBay Machine Learning Challenge 2021",
    subtitle: "11nd Place",
    image: "assets/images/experience-page/ebay.jpg",
    desp: "The 3rd Annual University Challenge of Machine Learning of eBay. Built machine learning model that can accurately predict delivery dates for items sold on eBay.",
    href: "https://github.com/azurey0/ebay2022",
  },
  {
    title: "Google & UCD MSBA Hackthon 2022",
    subtitle: "2nd Place",
    image: "assets/images/experience-page/gcp.png",
    desp: "Ranked 2nd Place and Best Use of Google Cloud Prize in UC Davis hackthon, partnering with Google Cloud. Applied casual inference models and data visualization to understand social disparity problem.",
    href: "https://github.com/azurey0/MSBA-hackthon",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
