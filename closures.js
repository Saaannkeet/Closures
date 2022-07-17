

// que1::

   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// Output:: 1
//         2
//         3
//         4



        // que2::
let count = 0;
(function immediate() {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged1?
    }
    console.log(count); // What is logged2?
  })();

// output :: logged1: 1
//          logged2: 0  


// que3::
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// output: 3
//        +3
//        +3

//Que-4. Write a code to calculate area of a rectangle using inner function. 
//In this case outer function should accept parameter length and inner function should accept parameter breadth.

function area(length, breadth){
    this.length = length;
    this.area = function (){
         this.breadth = breadth;
         
         return (this.length * this.breadth) ;
    };
};
var c = new area(6,5);
console.log('Area =', c.area());


//Que-5. Take a variable in outer function and create an inner function to increase the counter every time it is called.

function outercounter(){
            var counter = 0;
        
            function innerCounter() {
                return counter += 1;
            };
        
            return innerCounter;
        }
        var counter = counter();
        alert(counter());
        alert(counter());
        alert(counter());
        alert(counter());

// que6::
  var a = 12;
(function () {
    alert(a);
  })(); 

// output: 12



// que7::
   var a = 10;
var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x();

// output: 12

// que8::
  var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
      " globalVar = " + globalVar);
    
    })(456);
})(123);

// output: outerArg = 123
//         innerArg = 456
//         outerVar = a
//         innerVar = b
//         globalVar = xyz