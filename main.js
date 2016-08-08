$(document).ready(()=> {
    var findLyrics =""
  var corsAnywhere="https://cors-anywhere.herokuapp.com/"
  var urlSearch="http://api.genius.com/search?q="



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

      for(var i=0; i<10;i++){
        $('#search_return').append('<div class="divResults" resultDivs id="'+(i+1)+'"><a href="'+searchResults.response.hits[i].result.url+'" target="_blank"><img class="artistPics" src="'+searchResults.response.hits[i].result.header_image_thumbnail_url+'"</a><h3 class="songNames">'+searchResults.response.hits[i].result.title+'</h3> ' +
        '<span><strong>Artist:</strong> '+
        searchResults.response.hits[i].result.primary_artist.name+'</span></div>')

      }
      for(var j=0;j<10;j++) {
        $('#resultdivs'+[j]+'').css('background-image',""+searchResults.response.hits[j].result.header_image_thumbnail_url+"");
      }




      }})
        $('#hiddenInput').delay(10000).css({
        'display': 'block',
        'margin': 'auto'}).fadeIn(500)

  })
 //   $('#changeInput').click(function(even){
 //  var inputValues = ('#input_text').value
 // var words = new Lexer().lex(document.getElementById(inputValues).innerHTML);
 // var taggedWords = new POSTagger().tag(words);
 // var result = "";
 // for (i in taggedWords) {
 // var taggedWord = taggedWords[i];
 //   for(var j=0;j<taggedWords.length;j+=3)  {
 //   if(taggedWords[j][1]==="NN")  {
 //    taggedWords[j][0]="taco"}
 //   else if(taggedWords[j][1]==="VBD")  {
 //    taggedWords[j][0]="swam"}
 //   else if(taggedWords[j][1]==="RB")  {
 //    taggedWords[j][0]="sloppily"}
 //   else if(taggedWords[j][1]==="JJ")  {
 //    taggedWords[j][0]="smelly"}
 //   else if(taggedWords[j][1]==="WP")  {
 //    taggedWords[j][0]="DEEEeez"}}
 //   var word = taggedWord[0];
 //   var tag = taggedWord[1];
 //   result += (word +" ");}
 // document.getElementById("tagged_text").innerHTML = result;})



})



//genius client id = k597dLatMTQuvx8CXxNoCdrgJ6rwzSIz-y--Fv8UXxdHLfU_gi7DOfEEncuOG2He
//client access token=  clQq5XgB3u6rHDYG3k7zN904TwsDX68DU2LHC6dHEGa532bI15yk41VxV2CNhC8J
// secret= s-1oLmPlIKFCmTKMSjI7C3mDiX7j76kfa8QX5DljFkNODLxbop-abYHuus4KrCkTcNRAf2Pm1xyzLlE9L1kZfg


//https://api.edmunds.com/api/media/v2/{make}/{model}/{year}/photos?api_key=jgv28njxfw5k75t4m5v23mdr&fmt=json





//a974cb46f8bfe28f1e58995879ee22

  //53z8gsmpx9yqy9fran5r8y44
  //jgv28njxfw5k75t4m5v23mdr
//
