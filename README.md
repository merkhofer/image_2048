# 2048
This is a clone of [2048](http://gabrielecirulli.github.io/2048/), but will fill tiles with the top image results from Bing. Did you ever want to play Muppets2048 or Liz2048? You're welcome.

Basically, when given a query, it goes out and gets the top reusults from the Bing search API and makes a map of them to the numbered tiles that you'd usually get in 2048. Then it populates the tiles. You'll have to [go get your own Bing API credentials](http://datamarket.azure.com/dataset/bing/search) if you want to put this on your site, but it's worth noting that Bing seems like your best option for a search API, with 5000 free calls a month on the whole web.

This is broken for iPhone, but I don't have one, so I'm not fixing it ;)