# Rancid Tomatillos

## Welcome to Naomi, Nick, and Dustin's 'Rancid-Tomatillo' Movie Project

Have you ever needed information on ONLY 20 random movies that may or may not be in theaters? Look no further!

## Setup

Feel free to pull down this repo, run 'npm install'

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:3000/`. Enter `control + c` in your terminal to stop the server at any time.

If you want, feel free to run `npm test` to check out our coverage and make sure everything is passing!

### Wins

This project had a lot of ups and downs. I would say some of the best things that were accomplished: 
1. Implementing testing in React as well as for async functions such as fetch. We needed to mock window.fetch which was an adventure to make sure our tests are still robust. We also we able to test our Redux global store as well which was a good challenge with props.
1. Implementation of Redux was a large win and challenge for us. Although there is not necessarily enough data to justify using Redux, we wanted to practice the implementation and ability to do this.
1. It was important to us to get as close to 100% tested as possible. Besides Router testing, we were able to test everything else.

### Challenges

Some of the bigger challenges of this project:
1. We had some nested fetches in our components, which caused some problems with updating the correct data at the correct time. 
1. We are still researching and determining what and when to test. We know that checking coverage is a good pulse check, but it's important to first make sure the tests themselves check what you want and test everything that can happen.

### Future Iterations

If given more time:
1. We would have created a more interactive experience for the user. More animations and exciting UI for the user to experience with, such as movie trailers or interacting with other users. 
1. We would like to ensure that our application is 100% accessible. It wasn't a priority for this one week project, but that's something we would like to ensure if given more time.
1. We would like to dive deeper into testing and understand the best way to test React Router that ensures everything is happening correctly.


### ScreenShots
#### Home Page
![welcomepage.gif](src/images/home_page.gif)

#### Home Page with Logged In User
![welcomepage.gif](src/images/home_page_loggedin.gif)

#### Login Page - Unsuccessful Login
![moviepage.gif](src/images/login_error.gif)

#### MovieShow Page
![characterloading.gif](src/images/movie_show.gif)

#### MovieShow Page with Logged In User
![characterloading.gif](src/images/movie_show_loggedin.gif)

## Collaborators

[Nick Nist](https://github.com/nicknist) | [Dustin Mikusko](https://github.com/dustin-mikusko) | [Naomi Campos](https://github.com/NaomiKC92)
