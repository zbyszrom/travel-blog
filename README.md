<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Create a Website Using Gatsby, Contentful, and Netlify
</h1>

This code is from a free 3.5 hour course on how to design and code a blog from scratch using technologies like Adobe XD, React, Gatsby, GraphQL, Netlify, Contentful, and more. [You can watch the entire step-by-step course on YouTube](http://https://youtu.be/4Wh5mTyn5WI "You can watch the entire step-by-step course on YouTube").

## 🚀 Getting Started

### Copy the Code to a New Directory

Create a new folder where you want your site to live on your local computer.

Then copy everything in the `_code` folder from the course downloads and paste it into the new folder that you created above.

### Contentful

Sign up for Contentful and create a new space.

Collect your [Space ID](https://www.contentful.com/developers/docs/references/content-management-api/ "Space ID") and [Management Token](https://www.contentful.com/developers/docs/references/authentication/ "Management Token").

Make sure you have [Node](https://nodejs.org/en/download/ "Node") and NPM installed.

Install the Contentful CLI with NPM.

`npm install -g contentful-cli`

Open the `contentful-config.json` file and set your `Space ID` and `Management Token`.

Run the following command in the terminal:

`contentful space import --config contentful-config.json`

Once the process is done you should be able to refresh Contentful and see the content, content models, and media imported.

### Install Node Modules for Local Development

In your project folder run the following command in terminal:

`npm install`

Now check your folder to make sure your modules are installed.

### Add Environment Variables for Local Development

This step isn't necessary for getting the site onto Netlify, but is necessary for running the site on your local machine.

Open the project in your code editor and add a file for `.env.production` and `env.development`.

Copy the text from the `env-variables.txt` file and paste them here, replacing `yourContentfulAccessToken` with your Contenful access token and `yourContentfulSpaceId` with your Contentful Space ID.

### Add GitIgnore

Open your project in a code editor and add a `.gitignore` file.

Copy the text from the `gitignore.txt` file included in the course files and paste it here.

Save your project.

### GitHub

Make sure you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Git") installed.

Sign into Github.com and create a new repository.

Follow the instructions to connect your project to the new Github repository, and double-check to make sure you’re not committing the following to Github:

*.env.production
.env.development
contentful-export.json
cocntentful-config.json*

Refresh your GitHub repo and make sure the project was committed.

### Netlify

Create a Netlify account and create a new site with your GitHub account.

Select the repo your project is in and then select **Build**.

**NOTE: YOUR BUILD WILL FAIL BECAUSE WE STILL NEED TO ADD THE BUILD VARIABLES IN NETLIFY.
**
### Add Netlify Build Variables

Head to **Settings > Build & Deploy > Build Environment Variables** and select **Edit Variables**.

Set a key to `CONTENTFUL_ACCESS_TOKEN` and the value to the Content Delivery API - access token from Contentful.

Add a new variable, but this time set the key to `CONTENTFUL_SPACE_ID` and the value to the Contentful Space ID.

Save the variables and then head to **Deploys > Trigger Deploy > Build Site**.

Now your site should be live!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.