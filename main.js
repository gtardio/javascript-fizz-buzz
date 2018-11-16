// stampa numeri da 1 a 100
// multipli di 3 ---> "Fizz"
// multipli di 5 ---> "Buzz"
// multipli di 3 e 5 ---> "FizzBuzz"

for (var i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0 ) {
    document.writeln("FizzBuzz" + "<br>") ;
  }

  else if (i % 3 == 0) {
    document.writeln("Fizz" + "<br>");
  }

  else if (i % 5 == 0) {
    document.writeln("Buzz" + "<br>");
  }

  else {
    document.writeln(i + "<br>");
  }
}
