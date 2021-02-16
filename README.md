# gnome-unsplasher

Downloads a random photo from unsplash.com using the QUERY env var and sets it as a desktop wallpaper in Gnome environment.

Uses api keys from bulkspash.js, but I may add an ability to specify own keys in the future. Check [Official doc on how to get it](https://unsplash.com/documentation#creating-a-developer-account).

You may want to add a cron job to change wallpaper every day. 

## Installation 

1. `git clone https://github.com/sdwvit/gnome-unsplasher.git`
2. `cd gnome-unsplasher`
3. for the cron job, I recommend doing `echo "cd $(pwd); npm start" > gnome-unsplasher && chmod +x ./gnome-unsplasher && sudo ln -s $(pwd)/gnome-unsplasher /etc/cron.daily/gnome-unsplasher`
4. `npm install`
5. `cp ./.env-example ./.env`
6. `nano ./.env` to add path for storing downloaded photos, and also a query
7. `npm start` to see if it works
