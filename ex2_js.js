var num = 266219;
var mult = 1;
while( num != 0 ) {
    mult = mult * ( num % 10 );
    num = Math.floor ( num / 10);
}
 var c = mult ** 3;
 console.log(String(c).slice(0,2));
