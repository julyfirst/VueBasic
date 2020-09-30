plus = function(a,b,callback){
  var result = a+b;
  callback(result);

}


plus(5, 10, function(res){
  console.log(res);
})
