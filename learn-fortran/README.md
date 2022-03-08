# Usage

Docs of fortran: https://fortran-lang.org/learn/quickstart/hello_world

`fm` stands for `fortranmon` like `nodemon`.

```
fm(){
	nodemon -e f90 -x "gfortran $@ -o binary && ./binary"
}
```

# Variables


Variables store information that can be manipulated by the program. Fortran is a strongly typed language, which means that each variable must have a type.

There are 5 built-in data types in Fortran:

integer – for data that represent whole numbers, positive or negative
real – for floating-point data (not a whole number)
complex – pair consisting of a real part and an imaginary part
character – for text data
logical – for data that represent boolean (true or false) values
Before we can use a variable, we must declare it; this tells the compiler the variable type and any other variable attributes.


Note: Fortran is a statically typed language, which means the type of each variable is fixed when the program is compiled—variable types cannot change while the program is running.


## Declaring variables
The syntax for declaring variables is:

`<variable_type> :: <variable_name>`

Note: Fortran code is case-insensitive; you don’t have to worry about the capitalisation of your variable names, but it’s good practice to keep it consistent.


## Continue from

Arrays: https://fortran-lang.org/learn/quickstart/arrays_strings
