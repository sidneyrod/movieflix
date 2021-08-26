<div align="center">
  <img src="https://github.com/sidneyrod/movieflix/blob/main/frontend/public/favicon.ico" width="150" />
  <a href="https://sidmovieflix.netlify.app/login">
    <h1>MovieFlix</h1>
  </a>
  <p>
    <img alt="Sidney Rodrigues" 
	src="https://img.shields.io/github/license/sidneyrod/movieflix">
  </p>
  <p>Say what you think of your favorite movie</p>
</div>

<div align="center">
  <img src="https://github.com/sidneyrod/assets/blob/main/movieflix-files/login.png" width="600" />
  <img src="https://github.com/sidneyrod/assets/blob/main/movieflix-files/criar-conta.png" width="600" />
  <img src="https://github.com/sidneyrod/assets/blob/main/movieflix-files/list-movies.png" width="600" />
  <img src="https://github.com/sidneyrod/assets/blob/main/movieflix-files/movie-details.png" width="600" />
  <div align="center">
  </div>
</div>

# About Project
MovieFlix is a full stack web application built during the **Bootcamp DevSuperior** (#MovieFlix_Web_2), an event organized by [DevSuperior](https://devsuperior.com.br "DevSuperior Website").

The application consists of a data movies, which can be listed and rated by users. Users can be visitors (VISITOR) and members (MEMBER). Only member users can enter ratings into the web site.

When accessing it, the user must login. Only logged in users can browse the movies. Right after logging in, the user goes to the movie listing, which shows the movies in paginated form, sorted alphabetically by title. User can filter movies by genre.

When selecting a movie from the listing, a detail page is shown, where you can see all information about the movie, as well as its ratings. If the user is a member user, he can still register an assessment on this screen.

A user has a name, email and password, and the email is their username. Each movie has a title, subtitle, an image, year of release, synopsis, and a genre. Member users can register ratings for the movies. The same member user can leave more than one rating for the same movie.

The application is also fully responsive and has a registration screen. (Both features were not mandatory for the completion of the project and it was a bonus that I decided to implement).
Link to application on Netlify -> <a href="https://sidmovieflix.netlify.app/login">MovieFlix</a> <br />

You're able to access the application with users:
<p>VISITOR -> email: bob@gmail.com | password: 123456</p>
<p>MEMBER -> email: ana@gmail.com | password: 123456</p>

If you want, you can also create your own account. By default, new accounts created will have the member profile (MEMBER) so that you can test the functionality of posting reviews.

## Documentation model
![Documentation model](https://github.com/sidneyrod/assets/blob/main/movieflix-files/modelo-conceitual.png)

## API documentation
<a href="https://apirest-movieflix.herokuapp.com/swagger-ui.html">
  Swagger
</a>

# Technologies used
## Backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Frontend
- HTML / CSS / TypeScript
- ReactJS

## Deployment into production
- Backend: Heroku
- Frontend: Netlify
- Database: Postgresql

# How to run the project

## Back end
Prerequisites: Java 11

```bash
# clone repository
git clone git@github.com:sidneyrod/movieflix.git

# enter back end project folder
cd backend

# run the project
./mvnw spring-boot:run
```

## Front end
Prerequisites: npm / yarn

```bash
# clone repository
git clone git@github.com:sidneyrod/movieflix.git

# enter front end project folder
cd frontend

# install dependencies
npm install
yarn

# run the project
npm start
yarn start
```

# Author

<p className="text-light">Developed by <a href="https://github.com/sidneyrod" 
target="_blank" rel="noreferrer">Sidney Rodrigues</a></p>
