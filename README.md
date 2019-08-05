# Project ImpactNUS
NUS Orbital (CP2106 Independent Software Development Project)<br>
<i>By Chia De Xun and Phaedra Tan Yee Joo</i>

## Table of contents
* [General info](#general-info)
* [Tech Stack](#tech-stack)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)

## General info
<b>Orbital Targeted Level of Achievement:</b> Apollo 11

<b>Problem Identification & Motivation: </b>
Existing channels/platforms for students to promote initiatives, as a means of enacting change and improving their student experience, are inadequate in terms of effectiveness. While students are able to voice their opinions on university-related issues via standard social media mediums, discourses on such topics are often unorganized and scattered, resulting in student-led initiatives having difficulty in gaining traction.

Currently, social media channels like Telegram or Facebook groups are heavily relied upon to garner support for such campaigns. It is taxing for the organizers of these student initiatives to broadcast their message multiple times on the various channels, not to mention collating and following up on the responses. Most pressing of all, current mediums do not provide a reliable method to ascertain the support of the initiative amongst the student body.

<b>Aim:</b>
Our web development project, ImpactNUS aims to be the go-to platform for NUS students to aggregate and initiate campaigns and petitions, as well as mobilize fellow students to better improve their NUS experience.

<b>Program Flow:</b>
<img src="https://i.ibb.co/NNfPNp0/Program-Flow-V3.png" alt="Program-Flow-V3" border="0"/>

## Tech Stack
* ReactJS
* ExpressJS
* NodeJS
* PostgreSQL

## Setup
Requirements: Have <a href = "https://nodejs.org/en/download/">NodeJS</a>, <a href = "https://www.postgresql.org/download/">PostgreSQL</a> installed 
1. Clone the repo
```sh
git clone https://github.com/DivineDX/ImpactNUS-Orbital2019.git
```

2. Change your directory to ./frontend-web. Install NPM Packages
```sh
npm install or yarn install
```

3. Start the React Web App. This starts the frontend website on localhost:3000
```sh
npm start or yarn start
```

4. Change your directory to ./backend-server and install NPM Packages
```sh
npm install or yarn install
```

5. Restore a PostgreSQL database using the ImpactNUS_DB.sql file in this folder. <a href="http://www.postgresqltutorial.com/postgresql-restore-database/">You may follow this guide for reference</a>

6. Ensure that your PostgreSQL server is running. Then, modify lines 10-18 of server.js according to your local PostgresSQL configuration.

7. Start the backend server 
```sh
npm start or yarn start
```
The website should be now be live and connected with the backeend server and database.

## Features
<b>List of developed core features</b>
* NUS OpenID Authentication
* Bulletin that aggregates all started petitions/campaigns with sorting and filtering options
* Dashboard which provides organizers a centralized place to 
* MultiStep (Wizard) Form to start petitions/campaigns
* Security Features such as authentication wtih JSON Web Token

<b>Future Developments</b>
* Feed that aggregates the updates of petitions/campaigns that a user 
* Security improvements

## Status
Project will be under development until Splashdown on 28 August 2019