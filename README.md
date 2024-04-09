# Weather Info Application

# [_Cloud Demo Link_](http://178.128.195.181:6061/)

![Image0](https://github.com/xxrom/weather_info/assets/14174697/ec3fc430-229c-450b-a5a5-52369462e8d8)

#### Overview

The Weather Info application.

Deliver real-time weather updates in a visually appealing and user-friendly interface.

Utilizing data from the OpenWeatherMap API, this application provides users with current weather conditions, including temperature, humidity, wind speed, and more, for a specified location.

User can easily change city to get current temperature and weather forecast for the next 5 days.

The application is designed with scalability and maintainability in mind, featuring a modular codebase, server-side rendering (SSR) for initial page loads, and client-side rendering for dynamic updates like the 5-day weather forecast.

#### Features

- Real-time Weather Data: Fetches and displays live weather data for any location specified by the user.
- Interactive Charts: Visualizes weather trends using @nivo charts for an engaging user experience.
- Dynamic Updates: Implements client-side fetching for continuous real-time data updates without page refreshes.
- Elegant Design: Utilizes Tailwind CSS for stylish and responsive design.
- Robust Error Handling: Gracefully handles API request failures and validates user inputs.
- Clean UI: Offers a straightforward and intuitive interface for users to effortlessly input their locations and receive weather information.
- Light/Dark theme modes.
- Desktop/Table/Mobile adapted design.
- Next.js with server side actions and SSR.
- Added dockerfile + docker-compose for running project in the docker.
- Added cloud link: project uploaded to the proxmox VM server, runs from docker and routs with ssh tunnel to VM in digital ocean.

### Getting Started

Prerequisites:

- Node.js (v18 or newer recommended)
- yarn

Clone the repository and install all packages:

```
git clone git@github.com:xxrom/weather_info.git

cd weather_info

yarn
```

#### Set up your OpenWeatherMap API key:

Create a `.env` file from `.env.example` in the root directory and add your API key (link to keys: https://home.openweathermap.org/api_keys):

```
WEATHER_API=your_api_key_here
PORT=6060
```

#### Run the development server:

```
yarn dev
```

Navigate to http://localhost:6060 to view the application.

#### Building for Production and run build

```
yarn build
yarn start
```

#### Build docker image and run project inside docker

```
yarn docker
```

Open "http://localhost:6061" that will be routed inside docker image to port 6060

---

#### Technologies Used

- `Next.js`: For server-side rendering, routing, and tooling.
- `React.js`: As the core framework for building the UI.
- TypeScript: For adding static type-checking to the project.
- `Tailwind CSS`: For styling and designing a responsive layout.
- `@nivo`: For rendering responsive and interactive charts.
- `ui.shadcn`: For styled components.

---
