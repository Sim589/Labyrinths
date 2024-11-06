# Labyrinths

This project aims to classify photos of TFL Tube Labyrinths into the correct station and ultimately embed this classifier into an app/website.

## Dev set up
### wsl
An easy option to dev on windows is the wsl. It should be built into most windows pc.
Currently using Ubuntu 24.04 which is the latest that windows wants to download. 
Python is pre-installed, but you might need to "sudo apt install" a few packages like pip. 
Also for the front end you will need node. Install it using this [guide.](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
If you have questions on how to do this, ask Chris.

### .venv
learn how to use a .venv folks. its good practice. I'll be putting any python requirements into 
`./requirements.txt`. Make your own .venv, activate it, then pip install the requirements. 

## Frontend
To get started developing the frontend, simply `cd frontend-labyrinths` then run `npm install` 
You can then run a dev front end server with vite via: `npm run dev`