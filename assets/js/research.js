/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Automated Dashboards for the Identification of Pathogenic Circulating Tumor DNA Mutations in Longitudinal Blood Draws of Cancer Patients",
    authors:
      "Aleksandr Udalov, Lexman Kumar, Anna N Gaudette, Ran Zhang, Joao Salomao, Sanjay Saigal, Mehdi Nosrati, Sean D McAllister, Pierre-Yves Desprez",
    conferences:
      "Methods Protoc",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/cpmc.png",
    citation: {
      vancouver:
        "Udalov A, Kumar L, Gaudette AN, Zhang R, Salomao J, Saigal S, Nosrati M, McAllister SD, Desprez PY. Automated Dashboards for the Identification of Pathogenic Circulating Tumor DNA Mutations in Longitudinal Blood Draws of Cancer Patients. Methods Protoc. 2023 May 1;6(3):46. doi: 10.3390/mps6030046. PMID: 37218906; PMCID: PMC10204543.",
    },
    abstract:
      "The longitudinal monitoring of patient circulating tumor DNA (ctDNA) provides a powerful method for tracking the progression, remission, and recurrence of several types of cancer. Often, clinical and research approaches involve the manual review of individual liquid biopsy reports after sampling and genomic testing. Here, we describe a process developed to integrate techniques utilized in data science within a cancer research framework. Using data collection, an analysis that classifies genetic cancer mutations as pathogenic, and a patient matching methodology that identifies the same donor within all liquid biopsy reports, the manual work for research personnel is drastically reduced. Automated dashboards provide longitudinal views of patient data for research studies to investigate tumor progression and treatment efficacy via the identification of ctDNA variant allele frequencies over time.",
    absbox: "absPopup1",
    link: "https://pubmed.ncbi.nlm.nih.gov/37218906/"
  },

  {
    title: "Survey of COVID-19 Responses to Understand Behaviour",
    authors:
      "Monash University, BehaviourWorks Australia",
    conferences:
      "",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/scrub.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "The SCRUB project aims to provide current and future policymakers with actionable insights into public attitudes and behaviours relating to the COVID-19 pandemic. The project involves more than 20,000 international surveys from 40 countries as end of 2020. SCRUB questions are constantly updated, the data is open, and the results are rapidly shared in an interactive online dashboard. After each wave of data collection, the Australian team generates and disseminates an updated report to relevant policy actors. Several waves – with supporting discussions – are captured on this page. More details coming soon.",
    absbox: "absPopup2",
    link:"https://www.behaviourworksaustralia.org/major-projects/covid-19-scrub-study",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
