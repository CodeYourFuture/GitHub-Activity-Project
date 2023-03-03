# Github Activity Project

Let's play with grabbing some data from an API and displaying it on a website. We will be using the the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests to the [Github Search API](https://docs.github.com/en/rest/search) and the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to display the data we get back. Let's go!

## Learning Objectives

- Explain how components are used in web development
- Adapt an existing web component to show your own data
- Extend this web component to present more data from the Github Search API
- Create a new web component that presents data from the Github Search API

## Requirements, Steps, and Acceptance Criteria

1. Open the `index.html` file in your browser and you should see a grid of badges showing pull requests to the Syllabus repo. This grid is a web component that is defined in the `pull-badges.js` file. If you've already done the Codewars API project, this will look very familiar.

2. Find the js module in the `index.html` file that links `pull-badges.js`. This module defines a new HTML element called `<pull-badges>`, which you can now use _just like any other HTML element_. Notice how we can select this and style it with CSS like any other HTML element.

3. Open the `pull-badges.js` file. The list of badges is defined as a class that extends the `HTMLElement` class. The `connectedCallback` method is called when the page loads. This callback is where we (a) make the request to the Github Search API and then (b) render the data we get back.

4. Change the `repo` variable in the `pull-badges.js` file to a different repo on the CodeYourFuture org. What about `1000-Paper-Cranes` ? Or what about this repo?

5. [Look at the API directly](https://api.github.com/search/issues?q=is:pr+repo:CodeYourFuture/syllabus) in your browser. It's just a URL - you can look at it. (Install a [JSON viewer extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) for your browser if you don't have one already. This will make it easier to read the data.)

6. Now try adding some more data to the badges. There are lots of other possible data we could display in the badge. Look through the [Github Search API docs](https://docs.github.com/en/rest/search) to help you. Maybe you will decide to break this component down into a badge component and a list component.

7. Now try creating a _new_ web component that displays some data from a Github API. There are absolutely [loads of Github APIs](https://docs.github.com/en/rest/pulls/pulls) you can play with. (Some require authentication but many are public.) Use the `pull-badges.js` file as a template for how to define a web component. You can use the `index.html` file to test your new component. (You could use this component in your portfolio website.)

#### Remember: keep it simple!

You don't need to make a full web app. Just make a web component that displays some data from a GitHub API. Explore and get creative. If your component gets complicated, _break it down_ into smaller components and compose them on the page, just as you would do with any other HTML elements.

## Acceptance Criteria

- [ ] I have adapted an existing web component to show my own data
- [ ] I have extended this web component to present more data from the Github Search API
- [ ] I have created a new web component that presents data from the Github Search API in my own way
- [ ] I have tested my page with Lighthouse and my Accessibility score is 100
- [ ] I have opened a pull request with my changes to this repo
- [ ] I have explained how components are used in web development, in my own words, in my pull request message

## Resources

<details>
<summary>Fetch API</summary>
Fetch API is a way for computer programs (like websites) to talk to each other and share information.

Think of Fetch as your new puppy. Send fetch to an API and tell it to fetch you some data. Fetch! Then _await_ your response. Fetch will dash back to you, panting, with the data you requested, or an error if something went wrong. This is your response. Stuff that response into a variable and do whatever you want with it.

=> https://developer.mozilla.org/en-US/docs/Web/API/fetch

This is how your Pull Requests are tracked automatically by CYF. We use the Fetch API to make requests to the Github API and then we record your pull requests against a list of repos in the trainee tracker. You could make your own tracker if you wanted to!

</details>
<details>
<summary>Web Component</summary>

### What is a web component?

If you want HTML to do something that it doesn't do by default, you can write your own custom HTML element. This is called a [web component](https://www.webcomponents.org/introduction).

### ...What is a component?

A component is a reusable, self-contained piece of code. Components are like lego blocks you can build websites with. Most websites are made by "composing" components in this way.

### Are all websites built with web components?

Nope! React components are written with React, Twig components are written with Twig, etc. Components are not a specific technology, they are a concept. Everywhere in programming we look to break down our code into small, reusable pieces. Web components are a way to do this with HTML.

### Do I need to use fetch to use web components?

Not at all.

Web components are a way to define your own HTML elements. That element does not need to dynamically load data. Fetch is a way to make requests to an API. We happen to be learning fetch and web components together but they are not dependent on each other.

</details>
