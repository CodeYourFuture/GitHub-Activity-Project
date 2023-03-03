// This native web component fetches a list of pull requests from the Github Search API and renders each PR as a badge with the avatar of the user who created the PR.
// Here is some information about web component https://developer.mozilla.org/en-US/docs/Web/Web_Components
// Here is the link to the Github Search API: https://docs.github.com/en/rest/reference/search#search-issues-and-pull-requests

class PullBadges extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.repo = "syllabus";
    this.pullRequests = [];
  }

  connectedCallback() {
    this.fetchActivity()
      .then(() => {
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // fetch the data from the Codewars API
  async fetchActivity() {
    const response = await fetch(
      `https://api.github.com/search/issues?q=is:pr+repo:CodeYourFuture/${this.repo}`
    );
    const data = await response.json();
    this.pullRequests = data; // set the pullRequests property with the fetched data
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        a { 
        
            box-shadow:0 0 5px rgba(0,0,0,0.25);
            display: inline-block;
            padding:.5rem;
        }  
        img {
          object-fit: cover;
          height:100%; width: 100%;
        }    
      </style>
        ${[
          ...this.pullRequests.items.map(
            (pr) =>
              `<a href="${pr.html_url}"><img src="${pr.user.avatar_url}" alt="${pr.user.login}"/></a>`
          ),
        ].join("")}
    `;
  }
}

customElements.define("pull-badges", PullBadges);
