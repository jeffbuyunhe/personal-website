## Installation and Setup

Before running this application, you will need to install Node.js and create a .env file for both the frontend and backend (an example is provided).

Node.js can be downloaded [here](https://nodejs.org/en/download/).

Clone the repository to any directory. Navigate to the <code>./personal-website/backend</code> folder and modify the variables in the <code>.env.example</code> file at the root of the folder. 

Inside the <code>.env.example</code> file you will need to define the following:

<pre>
FRONTEND_URL="https://localhost:3000/" (already set for you, do not change unless port 3000 is being used elsewhere)
EMAIL_ADDRESS=YOUR EMAIL ADDRESS
EMAIL_KEY=YOUR EMAIL KEY
</pre>

After this, change the name of the <code>.env.example</code> file to just <code>.env</code>

Finally, install the dependencies with <code>npm install</code>, and run the backend with <code>node app.js</code>.

For the frontend create a new terminal window and navigate to <code>./personal-website/frontend</code>.

The backend should run on port <code>3001</code>, but if this changes for any reason you must go into <code>.env.example</code> and change the port to the different one.

<pre>
NEXT_PUBLIC_BACKEND_URL="http://localhost:3001/" (you probably don't need to change this)
</pre>

Otherwise, all you have to do is rename <code>.env.example</code> file to just <code>.env</code> like in the backend.

Finally, install the dependencies with <code>npm install</code>, and run the frontend with <code>npm run dev</code>.

You can now visit the website by going to <code>localhost:3000</code> on any web browser.
