# Project
Look at the README.md files in the server and client folders for more info on how to start server and client on your local computer.

## Back End:
- It runs on port 4000 by default on localhost. The idea of server is to make http request to a remote API endpoint to get an info on a list of repositories. It is also reponsible to get additional repository info from the local file in JSON format. Server combines both data and sorts in chronological order which then provides the final data to the local endpoint **localhost:4000/repos**.

## Front End:
- Front end is built in ReactJS. Client side runs on port 3000 by default. Once **localhost:3000** is requested on the browser, it lists all the repositories by name, description, language, forks count and date.
- All repositories on the homepage are clickable and once clicked, it redirects user into the repo details page which will be located at **localhost:3000/:repoId**. Additionally homepage has a dropdown menu where you can filter out repositories by their language type.
- Repo details page has message, author id, recent commit date info as well as markdown file if it exists.