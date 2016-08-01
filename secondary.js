var manufacturers = ["am-general", "acura", "alfa-romeo", "aston-martin", "audi", "bmw", "bentley", "bugatti", "buick", "cadillac", "chevrolet", "chrysler", "daewoo", "dodge", "eagle", "fiat", "ferrari", "fisker", "ford", "gmc", "genesis", "geo", "hummer", "honda", "hyundai", "infiniti", "isuzu", "jaguar", "jeep", "kia", "lamborghini", "land-rover", "lexus", "lincoln", "lotus", "mini", "maserati", "maybach", "mazda", "mclaren", "mercedes-benz", "mercury", "mitsubishi", "nissan", "oldsmobile", "panoz", "plymouth", "pontiac", "porsche", "ram", "rolls-royce", "saab", "saturn", "scion", "spyker", "subaru", "suzuki", "tesla", "toyota", "volkswagen", "volvo", "smart"]
console.log(manufacturers)



$(document).ready(()=> {
   //for(var makes of manufacturers) {
    $.ajax({
    url:"https://api.edmunds.com/api/vehicle/v2/ford/model?/year?/styles?fmt=json&api_key=jgv28njxfw5k75t4m5v23mdr",
    error: function(err)  {
      console.log(err)
    },
    method:'GET',
    success: function(test) {
      console.log(test)
 }
})
//}
})
