<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Notifications System</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Toy application to simulate a Notification system (think of it like AWS SNS). In the web app, you're able to send a message by selecting a specific category/topic. It will be sent to all users subscribed to the selected category through "channels" like SMS, Email, Push notifications, etc.

To avoid complexity, both the frontend and backend projects are contained in this same repository.

Keep in mind the following:

- There are no real users here. They are mocked and stored in a JSON file.
- No real notifications are being sent through any kind of service. We randomly simulate sending them and succeeding or failing in the process.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![Bulma][Bulma.css]][Bulma-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![NodeJS][NodeJS-badge]][NodeJS-url]
* [![Express][Express-badge]][Express-url]
* [![Docker][Docker-badge]][Docker-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
- Make sure you have Docker and Docker Compose installed on your machine. You can follow the instructions here https://www.docker.com/ to set it up.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/geratarra/notifications.git
   ```
2. In your terminal, get into the root folder.
   ```sh
   cd notifications
   ```
3. Run `docker compose up`. This should build and run 2 services. One for the SPA application and another one for allocating the backend project.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
Once you have your Docker containers up and running, you should be able to access http://localhost:3000 in your browser. You'll see the main view, Publish, where you can select a message category and write a message. Once you submit the form, a notification will be sent to all users subscribed to the selected category. There are different "channels" through which the notification will be sent.

The Logs page is a simple view where you can see a list of notifications sent through different channels and users, along with the corresponding status.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- [ ] Add tests, either unit, integration, etc.
- [ ] Set up Docker watch to automatically update and preview the running Compose services as the code is edited and saved.
- [ ] Add a new service for allocating the database.
- [ ] It would be probably a good idea to introduce Worker Threads to "divide and conquer" the task of sending a notification through multiple channels.

<!-- CONTACT -->
## Contact

Gerardo  - geratarra@gmail.com

Project Link: [https://github.com/geratarra/notifications](https://github.com/geratarra/notifications)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Express + TypeScript](https://github.com/seanpmaxwell/express-generator-typescript) Really handy tool for scaffolding a NodeJS + Express + TypeScript project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gerardotarragona
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bulma-url]: https://bulma.io/
[Bulma.css]: https://img.shields.io/badge/Bulma-black?style=for-the-badge&logo=bulma
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript
[TypeScript-url]: https://www.typescriptlang.org/
[NodeJS-url]: https://nodejs.org/en
[NodeJS-badge]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Express-url]: https://expressjs.com/
[Express-badge]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Docker-url]: https://www.docker.com/
[Docker-badge]: https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker

