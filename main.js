$(document).ready(()=> {
    var findLyrics =""
  var corsAnywhere="https://cors-anywhere.herokuapp.com/"
  var urlSearch="http://api.genius.com/search?q="


  $('#lyricButton').click(function()  {
    $('#search').css('display', 'block')
  })

  $('#quoteButton').click(function(){
    $('#quotes').css('display','block')
})


  $('#anyTextButton').click(function(){
    $("#search").css('display','none')
    $('#search_return').empty()
    $('#hiddenInput').delay(10000).css({
    'display': 'inline-block',
    'float':'left',
    'margin': 'auto'}).fadeIn(500)

  })
  $('#changeInput').click(function(even){
  $('#input_texts').append($('#userInputs').val());
  $("#inputWords").css({
  'display': 'block'
  })


  })

  $('#quoteWordButton').submit(function()  {
    event.preventDefault();
    $.ajax({
      url:corsAnywhere+"http://api.forismatic.com/api/1.0/",
      format:'json',
      method:"GET",
      error:function(errs)  {
        console.log(errs)
      },
      success: function(quoteResults) {
        console.log(quoteResults)
      }
    })

  })


  $('#search_form').submit(function(even){
    event.preventDefault();
    var searchItems = $('#main_search').val();




    $.ajax({
      url:corsAnywhere+urlSearch+searchItems,
      error:function(err) {
        console.log(err)
      },
      beforeSend: function setHeader(xhr) {
        xhr.setRequestHeader('Authorization', "Bearer clQq5XgB3u6rHDYG3k7zN904TwsDX68DU2LHC6dHEGa532bI15yk41VxV2CNhC8J");
      },



      method:'GET',
      success:function(searchResults)    {

      console.log(searchResults)
      $('#search_return').empty()

      for(var i=0; i<9;i++){
        $('#search_return').append('<div class="divResults" resultDivs id="'+(i+1)+'"><a href="'+searchResults.response.hits[i].result.url+'" target="_blank"><img class="artistPics" src="'+searchResults.response.hits[i].result.header_image_thumbnail_url+'"</a><h3 class="songNames">'+searchResults.response.hits[i].result.title+'</h3> ' +
        '<span class ="artistNames"><strong>Artist:</strong> '+
        searchResults.response.hits[i].result.primary_artist.name+'</span></div>')

      }
      for(var j=0;j<9;j++) {
        $('#resultdivs'+[j]+'').css('background-image',""+searchResults.response.hits[j].result.header_image_thumbnail_url+"");
      }




      }})
        $('#hiddenInput').delay(10000).css({
        'display': 'inline-block',
        'float':'left',
        'margin': 'auto'}).fadeIn(500)

  })
  $('#changeInput').click(function(even){
    $('#input_texts').append($('#userInputs').val());
    $("#userWords").css({
      'display': 'block'
    })
    $('html, body').animate({
        scrollTop: $("#userWords").offset().top
    }, 2000);
  })

  $('#userWordsSubmit').click(function(){

          $("#hiddenInput").css({
            'display': 'none'
          })

          $('#input_texts').attr('id',"input_text")
          var adjValues=$("input[name='adjectives\\[\\]']").map(function(){
            return $(this).val();}).get();
          var nounValues=$("input[name='nouns\\[\\]']").map(function(){
            return $(this).val();}).get();
          var verbValue=$("input[name='verbs\\[\\]']").map(function(){
            return $(this).val();}).get();

            var words = new Lexer().lex(document.getElementById("input_text").innerHTML);
            var taggedWords = new POSTagger().tag(words);
            var result = "";
            for (i in taggedWords) {
            var taggedWord = taggedWords[i];
              for(var j=0;j<taggedWords.length;j+=3)  {
              if(taggedWords[j][1]==="NN")  {
               taggedWords[j][0]='hello'
              }
              else if(taggedWords[j][1]==="VBD")  {
               taggedWords[j][0]=verbValue
              }
              else if(taggedWords[j][1]==="RB")  {
               taggedWords[j][0]="shittily"
              }
              else if(taggedWords[j][1]==="JJ")  {
               taggedWords[j][0]="hello"
              }
              else if(taggedWords[j][1]==="WP")  {
               taggedWords[j][0]="DEEEeez"
              }
              }
              var word = taggedWord[0];
              var tag = taggedWord[1];

              result += (word +" ");
          }
          console.log(word)
          $("#tagged_text").append('<p>'+result+'</p>')
});

  })





//genius client id = k597dLatMTQuvx8CXxNoCdrgJ6rwzSIz-y--Fv8UXxdHLfU_gi7DOfEEncuOG2He
//client access token=  clQq5XgB3u6rHDYG3k7zN904TwsDX68DU2LHC6dHEGa532bI15yk41VxV2CNhC8J
// secret= s-1oLmPlIKFCmTKMSjI7C3mDiX7j76kfa8QX5DljFkNODLxbop-abYHuus4KrCkTcNRAf2Pm1xyzLlE9L1kZfg


//https://api.edmunds.com/api/media/v2/{make}/{model}/{year}/photos?api_key=jgv28njxfw5k75t4m5v23mdr&fmt=json





//a974cb46f8bfe28f1e58995879ee22

  //53z8gsmpx9yqy9fran5r8y44
  //jgv28njxfw5k75t4m5v23mdr
//
