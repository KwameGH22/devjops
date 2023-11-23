1. Based on the mock design, the decision was made to divide the UI into 3 separate components.
2. Namely the Navbar, Card and Button components.
3. These three (3) components were to be rendered inside the root component that is App.js.
4. inside the src folder a subfolder was created and named components.
5. inside the component subfolder, the three functional components were created, that is Navbar.js, Card.js, and Button.js.
6. inside these files the command "rafce" was run to generate a boilerplate functional expression for the components. the boilerplate usually comes with import statements for the react library
7. Beginning with the Navbar component, the parent div  of the return block of the Navbar functional component expression, was provided with the className: navbarContainer.
8.  Within the parent div with className navbarContainer, two child elements were created namely h1 and a div.
9. The h1 element was affixed a className attribute: navbarTitle and provided the content: devjobs, while the child div was affixed with the className attribute: navbarMenuIcon and supplied giHamburger icon component.
10. to provide styling for the entire project, a subfolder in the src folder was created and named styles.
11. Inside the styles folder a css file named navbar.css was created to provide styling for the navbar component.
12. To import the hamburger menu icon into the navbar component, the command "npm install react-icons" was run in the project directory at the command line to install a react-library that made it possible to import icons from open source icon libraries such as fontawesome, bootstrap etc.
13. After the installation, the browser was directed to https://react-icons.github.io/react-icons/.
14. At the sites landing page, the fontawesome card was identified and the page visited.
15. At the fontawesome page, the menu icon was queried in the search field and several menu icons were returned.
16. The gi/GiHamburgerMenu icon was selected and this opens up a dedicated page with instructions and codes for importing icon into react project.
17. The import statement was copied to clipboard and pasted below the react library import statement: import { GiHamburgerMenu } from "react-icons/gi". of the Navbar component file.
18. for styling the Navbar component, the navbar.css file was imported via the statement: "import "../styles/navbar.css"";
19. To preview the Navbar.js component, it was imported into the root component: App.js with the statement; import Navbar from './components/Navbar';.
20. After this import, the component was called as a JSX element inside the return block of the app.js function declaration.
21. The card component was was also imported into the App.js file with the statement: "import Card from "./components/Card"";
22. Even though at this point, the card component's logic is still not implemented, the Card JSX element was implemented with the following six (6) props: id, postdate, contract, position, company, location.
23. the values of the properties above are to be supplied from an external source, in this case a data.json file located in the src folder of the react project.
24. to make the data available to our card component, it was imported using the statement: import data from "./data/data.json";