# Even-Odd Number.

> Even numbers are those numbers that are exactly divisible by 2. The remainder operator % gives the remainder when used with a number. For example, const number = 6; const result = number % 4; // 2. Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.

* Let's say ->

> document.write("This is even number<br>");
for(var a = 1; a <= 10; a++){
  if (a % 2 == 0) {
    document.write(a + "<br>");
  }
}

>document.write("This is odd number<br>");
for(var a = 1; a <= 10; a++){
  if (a % 2 != 0 ) {
    document.write(a + "<br>");
  }
}