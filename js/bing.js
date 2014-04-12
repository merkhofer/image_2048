
/*! Bing Search Helper v1.0.0 - requires jQuery v1.7.2 */
$(function()
{
  // Attaches a click handler to the button.
  $('#bt_search').click(function(e)
  {
    e.preventDefault();
    var query = $('#query').val();
    if (query)
      thumbs = search(query);
      var actuated_bing = new BingActuator(thumbs);
      new GameManager(4, KeyboardInputManager, actuated_bing, LocalStorageManager);
      $("#game_title").text(query+' 2048');
      $("#game").show();
      //you COULD change the query, except the game has taken control of 4 of the letter keys...
      $("#make_query").hide();
  }
  );

  function search(query)
  {
    // Establish the data to pass to the proxy.
    var data = { q: query,};
    var hashOfThumbs = {};
    // Calls the proxy, passing the query
    // use AJAX in order to send synchronously
    $.ajax({
       type: 'GET',
       url: '../bing_proxy.php',
       dataType: 'json',
       success: function(obj)
         {
           if (obj.d !== undefined)
           {
             var items = obj.d.results;
             for (var k=0; k < 12; k++)
             {
               thisTile = (Math.pow(2, (k+1))).toString();
               //make an object mapping tile number to the url of a thumbnail
               hashOfThumbs[thisTile] = items[k].Thumbnail.MediaUrl;
               }
             }
           },
       data: data,
       async: false
    });
    return hashOfThumbs;
}

});
