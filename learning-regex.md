# learning regex

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
