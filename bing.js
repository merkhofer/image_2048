
/*! Bing Search Helper v1.0.0 - requires jQuery v1.7.2 */
$(function()
{
  // Attaches a click handler to the button.
  $('#bt_search').click(function(e)
  {
    e.preventDefault();
    // Clear the results div.
    $('#results').empty();
    var query = $('#query').val();
    if (query)
      thumbs = search(query, serviceOp);
      var actuated_bing = new BingActuator(thumbs);
      new GameManager(4, KeyboardInputManager, actuated_bing, LocalStorageManager);
      $("#game_title").text(query+' 2048');
      $("#game").show();
      $("#make_query").hide();
      $('#new_query').show();
  });

  function search(query)
  {
    // Establish the data to pass to the proxy.
    var data = { q: query,};
    var hashOfThumbs = {};
    // Calls the proxy, passing the query, service operation and market.
    $.getJSON('bing_proxy.php', data, function(obj)
      {
        if (obj.d !== undefined)
        {
          var items = obj.d.results;
          for (var k=0; k < 12; k++)
          {
            thisTile = (Math.pow(2, (k+1))).toString();
            hashOfThumbs[thisTile] = items[k].Thumbnail.MediaUrl;
            }
          }
        });
    //alert(hashOfThumbs);
    return hashOfThumbs;
}

});
