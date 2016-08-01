


$(document).ready(()=> {
    $.ajax({
    url:"http://api.edmunds.com/api/vehicle/v2/dodge?fmt=json&api_key=jgv28njxfw5k75t4m5v23mdr",
    error: function(err)  {
      console.log(err)
    },
    method:'GET',
    success: function(test) {

var carList =makies(test)
console.log(carList)

}
})})
// for(var findModels of carList)  {
//   $.ajax({
//   url:"'https://api.edmunds.com/api/vehicle/v2/"+[findModels]+"/models?fmt=json&year=1995&api_key=jgv28njxfw5k75t4m5v23mdr",
//   error: function(err)  {
//     console.log(err)
//   },
//   method:'GET',
//   success: function(carList) {
//
//
// }


//}
      // for(var i=0; i<=makesObj.length;i++)  {
      //   var blah=makesObj[i].niceName;
      //
      //   vehicleMakes.push(blah)
      //   console.log(vehicleMakes)
      // }

      // var makeNames = test.makes;
      // for(var name of test)  {
      //   console.log(test)
      //}
    //}

    //})

//  })



  //
  // $(document).ready(()=> {
  //     $.ajax({
  //     url:"https://api.edmunds.com/api/vehicle/v2/styles/7638?fmt=json&api_key=jgv28njxfw5k75t4m5v23mdr&view=full",
  //     error: function(err)  {
  //       console.log(err)
  //     },
  //
  //     method:'GET',
  //     success: function(tester) {
  //       console.log(tester)
  //     }
  //     })
  //   })


  // $(document).ready(()=> {
  //     $.ajax({
  //     url:"https://api.edmunds.com/api/vehicle/v2/honda/accord?fmt=json&state=used&api_key=jgv28njxfw5k75t4m5v23mdr",
  //     error: function(err)  {
  //       console.log(err)
  //     },
  //
  //     method:'GET',
  //     success: function(tester) {
  //       console.log(tester)
  //     }
  //     })
  //   })
//https://api.edmunds.com/api/media/v2/{make}/{model}/{year}/photos?api_key=jgv28njxfw5k75t4m5v23mdr&fmt=json


  //53z8gsmpx9yqy9fran5r8y44
  //jgv28njxfw5k75t4m5v23mdr
