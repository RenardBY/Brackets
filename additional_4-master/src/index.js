module.exports = function multiply(first, second) {
  // your solution
var ololo;
//ololo=String(first*second);
//console.log(ololo);
//console.log(ololo.length);
var ololo2;

//for (var i = 0; i < ololo.length; i++) {
//	Things[i]
//};
ololo2='';
ololo=first*second;
//console.log(ololo.toString(10));
//ololo=String(ololo);
for (var i = 0; i < ololo.length; i++)
{
	ololo2=ololo2+toString(ololo[i],10);
}
console.log(ololo2);
//first.toString(16);
//second.toString(16);
//ololo=first*second;
//console.log(ololo.toString(10));
  return String(first*second);
}
