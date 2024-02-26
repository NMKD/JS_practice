function my_function1(n) {
    if (n != 0) {
        my_function1(n - 1)
    }
    return
  }


 const my_function = (n) => n != 0 ? my_function(n - 1) : "done"

//  console.log(my_function(3))
my_function1(3)