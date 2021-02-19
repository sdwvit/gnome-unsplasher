# gnome-unsplasher

Downloads a random photo from unsplash.com using the QUERY env var and sets it as a desktop wallpaper in Gnome environment.

You must provide an API_KEYS in .env var or node environment for this to work. Check [Official doc on how to get it](https://unsplash.com/documentation#creating-a-developer-account).

You may want to add a cron job to change wallpaper every day. 

## Installation 

1. `git clone https://github.com/sdwvit/gnome-unsplasher.git`
2. `cd gnome-unsplasher`
3. for the cron job, I recommend doing `echo "cd $(pwd); npm start" > gnome-unsplasher && chmod +x ./gnome-unsplasher && sudo ln -s $(pwd)/gnome-unsplasher /etc/cron.daily/gnome-unsplasher`
4. `npm install`
5. `cp ./.env-example ./.env`
6. `nano ./.env` to add path for storing downloaded photos, and also a query
7. `npm start` to see if it works
