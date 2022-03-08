program variables
  implicit none

  integer :: amount
  real :: pi
  complex :: frequency
  character :: initial
  logical :: isOkay

  ! Characters are surrounded by either single (') or double quotes (").
  ! Logical or boolean values can be either .true. or .false..

  amount = 10
  pi = 3.1415927
  frequency = (1.0, -0.5)
  initial = 'A'
  isOkay = .false.


  print *, 'The value of amount (integer) is: ', amount
  print *, 'The value of pi (real) is: ', pi
  print *, 'The value of frequency (complex) is: ', frequency
  print *, 'The value of initial (character) is: ', initial
  print *, 'The value of isOkay (logical) is: ', isOkay

end program variables
