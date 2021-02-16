# gnome-unsplasher

Downloads a random photo from unsplash.com using the QUERY env var and sets it as a desktop wallpaper in Gnome environment.

Uses api keys from bulkspash.js, but I may add an ability to specify own keys in the future. Check [Official doc on how to get it](https://unsplash.com/documentation#creating-a-developer-account).

You may want to use `crontab -e` to add a cron job to change wallpaper every day. 
