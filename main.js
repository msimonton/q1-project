$(document).ready(()=> {
  var corsAnywhere="https://cors-anywhere.herokuapp.com/"
  var urlSearch="http://api.lyricsnmusic.com/songs?api_key=a974cb46f8bfe28f1e58995879ee22&q="

  $('form').submit(function(even){
    event.preventDefault();
    var searchItems = $('#main_search').val();
    $.ajax({
      url:corsAnywhere+urlSearch+searchItems,
      error:function(err) {
        console.log(err)
      },
      method:'GET',
      success:function(searchResults)    {
        console.log(searchResults)
        for(var i=0; i<10;i++)  {
          for(var j of i) {
            if
          }
          $('#search_return').append('<h3>'+searchResults[i].title+'</h3>')
          $('#search_return').append('<span>'+searchResults[i].artist.name+'</span>')

        }
      }





    })


  })



})
//https://api.edmunds.com/api/media/v2/{make}/{model}/{year}/photos?api_key=jgv28njxfw5k75t4m5v23mdr&fmt=json





//a974cb46f8bfe28f1e58995879ee22

  //53z8gsmpx9yqy9fran5r8y44
  //jgv28njxfw5k75t4m5v23mdr
//
