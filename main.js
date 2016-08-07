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
        //for(var i=0; i<10;i++)
        var removeDuplicates=[];
        searchResults.sort(function(a,b)  {
          for(var i=0; i<searchResults.length-1; i++) {
            if(searchResults[i].artist.name == searchResults[i+1].artist.name && searchResults[i].title == searchResults[i+1].title)  {
              delete searchResults[i]
            }
          }
          searchResults=searchResults.filter( function(el){
            return(typeof el !=="undefined")
          })
      })
      console.log(searchResults)




          for(var i=0; i<10;i++){
          $('#search_return').append('<div class="resultDivs id="'+(i+1)+'"><h3 class="songNames">'+
          searchResults[i].title+'</h3> ' +
          '<span><strong>Artist:</strong> '+
          searchResults[i].artist.name+'</span><p class="hidden_url">'+searchResults[i].url+'</p></div>')
        }

        }
      })
    })


    $('.resultDivs').click(function(event) {
      alert(this.url)
    })





  })



//genius client id = k597dLatMTQuvx8CXxNoCdrgJ6rwzSIz-y--Fv8UXxdHLfU_gi7DOfEEncuOG2He
//client access token=  clQq5XgB3u6rHDYG3k7zN904TwsDX68DU2LHC6dHEGa532bI15yk41VxV2CNhC8J
// secret= s-1oLmPlIKFCmTKMSjI7C3mDiX7j76kfa8QX5DljFkNODLxbop-abYHuus4KrCkTcNRAf2Pm1xyzLlE9L1kZfg


//https://api.edmunds.com/api/media/v2/{make}/{model}/{year}/photos?api_key=jgv28njxfw5k75t4m5v23mdr&fmt=json





//a974cb46f8bfe28f1e58995879ee22

  //53z8gsmpx9yqy9fran5r8y44
  //jgv28njxfw5k75t4m5v23mdr
//
