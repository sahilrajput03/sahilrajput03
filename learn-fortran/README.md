# Usage

Docs of fortran: https://fortran-lang.org/learn/quickstart/hello_world

`fm` stands for `fortranmon` like `nodemon`.

```
fm(){
	nodemon -e f90 -x "gfortran $@ -o binary && ./binary"
}
```
