# learning regex

W3Schools.com - Regex Reference: https://www.w3schools.com/jsref/jsref_obj_regexp.asp

Course: RegexOne - Learn Regular Expressions with simple, interactive exercises.

Source: https://regexone.com/

**Lesson1**: Over the various lessons, you will be introduced to a number of special metacharacters used in regular expressions that can be used to match a specific type of character. In this case, the character \d can be used in place of any digit from 0 to 9. The preceding slash distinguishes it from the simple d character and indicates that it is a metacharacter.

**Lesson2**: Lesson 1½: The 123s: Similarly, there is the concept of a wildcard, which is represented by the . (dot) metacharacter, and can match any single character (letter, digit, whitespace, everything). You may notice that this actually overrides the matching of the period character, so in order to specifically match a period, you need to escape the dot by using a slash \. accordingly.

```bash
...\.

Match cat.
Match 896.
Match ?=+.
Skip abc1
```

**Lesson3**: Matching specific characters: There is a method for matching specific characters using regular expressions, by defining them inside square brackets. For example, the pattern [abc] will only match a single a, b, or c letter and nothing else.

```bash
[cmf]an

Task	Text	 
Match	can
Match	man
Match	fan
Skip	dan
Skip	ran
Skip	pan
```

**Lesson4**: Excluding specific characters: To represent this, we use a similar expression that excludes specific characters using the square brackets and the ^ (hat). For example, the pattern [^abc] will match any single character except for the letters a, b, or c.

```bash
[^b]og

Match	hog
Match	dog
Skip	bog
```

**Lesson5**: Character ranges: When using the square bracket notation, there is a shorthand for matching a character in list of sequential characters by using the dash to indicate a character range. For example, the pattern [0-6] will only match any single digit character from zero to six, and nothing else. And likewise, [^n-p] will only match any single character except for letters n to p.

Multiple character ranges can also be used in the same set of brackets, along with individual characters. An example of this is the alphanumeric \w metacharacter which is equivalent to the character range [A-Za-z0-9_] and often used to match characters in English text.

```bash
\w\w[a-c]
\w\w[abc]   This works too.
\w\w[^x-z]  This works too.
\w\w[^xyz]  This works too.
..[abc]     This works too.
..[a-c]     This works too.
..[^x-z]    This works too.
..[^xyz]    This works too.


Match	Ana
Match	Bob
Match	Cpc
Skip	aax
Skip	bby
Skip	ccz
```

**Lesson6**: Catching some zzz's

Note: Some parts of the repetition syntax below isn't supported in all regular expression implementations.

We've so far learned how to specify the range of characters we want to match, but how about the number of repetitions of characters that we want to match? One way that we can do this is to explicitly spell out exactly how many characters we want, eg. \d\d\d which would match exactly three digits.

A more convenient way is to specify how many repetitions of each character we want using the curly braces notation. For example, a{3} will match the a character exactly three times. Certain regular expression engines will even allow you to specify a range for this repetition such that a{1,3} will match the a character no more than 3 times, but no less than once for example.

This quantifier can be used with any character, or special metacharacters, for example w{3} (three w's), [wxy]{5} (five characters, each of which can be a w, x, or y) and .{2,6} (between two and six of any character).

In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang "wazzup?". Try writing a pattern that matches only the first two spellings by using the curly brace notation above.

```bash
waz{2,}up
FYI: This says that z character must be atleast 2 times repeated.

Match	wazzzzzup
Match	wazzzup
Skip	wazup
```
