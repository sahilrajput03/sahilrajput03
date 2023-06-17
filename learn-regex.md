# learning regex

**TODO: DO THE \` tick markings in all the text.**

***W3Schools.com - Regex Reference***: https://www.w3schools.com/jsref/jsref_obj_regexp.asp

Course: RegexOne - Learn Regular Expressions with simple, interactive exercises.

Source: https://regexone.com/

**Quick Links:**
- Regex debugger**: https://regex101.com/

## Look Behind assertion `(?<!\S)`
<details>
  <summary>cool bddy</summary>
    <img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/fed1fbbc-8c78-4ace-bc0d-568df12c78d5" alt="drawing"/>
  hahahah
</details>

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/fed1fbbc-8c78-4ace-bc0d-568df12c78d5)


## random*
  - Q. What is .* in simple terms?
    Ans. It means literally no text or any text. Yo!!
  - Q. With the use of parentheses and question mark we can do like: `(someText)?`
    This means "zero or one someText".
  - Q. What would be `/[0-9]{3}/.test('my 789 text')` javascript?
     Ans. true coz we are mathing three instance of a digit, yo!
  - Q. What is + used for ?
    n+ Matches any string that contains at least one n
  - Q. How , works in `{}` operator ?
    For regex, 1st case: `[0-9]{2}` and 2nd case: `[0-9]{2,}` against text : **asdf2342asdf**
    **_Result_**:
    1. `23` only.
    2. it matches `2342` coz we have like `{2,}` which means match atleast 2 or more occurence of any digit. Yikes!
  - LEARN: `^` matches beginning of line and `$` matches end of the line.


## Match for one of two words

Source: [Click here](https://stackoverflow.com/questions/6863518/regex-match-one-of-two-words)




## FROM COURSE

**Lesson1**:

Over the various lessons, you will be introduced to a number of special metacharacters used in regular expressions that can be used to match a specific type of character. In this case, the character `\d` can be used in place of any digit from 0 to 9. The preceding slash distinguishes it from the simple d character and indicates that it is a metacharacter.

**Lesson2**: Lesson 1½ The 123s:

Similarly, there is the concept of a wildcard, which is represented by the `.` (dot) *metacharacter*, and can match any single character (letter, digit, whitespace, everything). You may notice that this actually overrides the matching of the period character, so in order to specifically match a period, you need to escape the dot by using a slash `\`. accordingly.

```bash
...\.

Match cat.
Match 896.
Match ?=+.
Skip abc1
```

**Lesson3**: Matching specific characters

There is a method for matching specific characters using regular expressions, by defining them inside square brackets. For example, the pattern `[abc]` will only match a single `a`, `b`, or `c` letter and nothing else.

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

**Lesson4**: Excluding specific characters

To represent this, we use a similar expression that excludes specific characters using the square brackets and the `^` (**hat**). For example, the pattern `[^abc]` will ***match any single character except for the letters `a`, `b`, or `c`***.

```bash
[^b]og

Match	hog
Match	dog
Skip	bog
```

**Lesson5**: Character ranges

When using the square bracket notation, there is a shorthand for matching a character in list of sequential characters by using the dash to indicate a character range. For example, the pattern `[0-6]` will only match any single digit character from zero to six, and nothing else. And likewise, `[^n-p]` will only match any single character except for letters n to p.

Multiple character ranges can also be used in the same set of brackets, along with individual characters. An example of this is the alphanumeric `\w` metacharacter which is equivalent to the character range `[A-Za-z0-9_]` and often used to match characters in English text.

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

We've so far learned how to specify the range of characters we want to match, but how about the number of repetitions of characters that we want to match? One way that we can do this is to explicitly spell out exactly how many characters we want, eg. `\d\d\d` which would match exactly three digits.

A more convenient way is to specify how many repetitions of each character we want using the curly braces notation. For example, `a{3}` will match the a character exactly three times. Certain regular expression engines will even allow you to specify a range for this repetition such that `a{1,3}` will match the a character no more than 3 times, but no less than once for example.

This quantifier can be used with any character, or special metacharacters, for example `w{3}` (three w's), `[wxy]{5}` (five characters, each of which can be a w, x, or y) and `.{2,6}` (between two and six of any character).

In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang `wazzup?`. Try writing a pattern that matches only the first two spellings by using the curly brace notation above.

```bash
waz{2,}up
FYI: This says that z character must be atleast 2 times repeated.

Match	wazzzzzup
Match	wazzzup
Skip	wazup
```


**Lesson7**: Mr. Kleene, Mr. Kleene:

tldr; `*` (kleen star) means ***zero or more***, `+` (kleen plus) means ***1 or more***.

A powerful concept in regular expressions is the ability to match an arbitrary number of characters. For example, imagine that you wrote a form that has a donation field that takes a numerical value in dollars. A wealthy user may drop by and want to donate $25,000, while a normal user may want to donate $25.

One way to express such a pattern would be to use what is known as the Kleene Star and the Kleene Plus, which essentially represents either 0 or more or 1 or more of the character that it follows (it always follows a character or group). **For example, to match the donations above, we can use the pattern `\d*` to match any number of digits, but a tighter regular expression would be `\d+` which ensures that the input string has at least one digit.**

These quantifiers can be used with any character or special metacharacters, for example `a+` (**one or more a's**), `[abc]+` (**one or more of any a, b, or c character**) and `.*` (**zero or more of any character**).

```bash
a.
a.+ This works too.

Match	aaaabcc
Match	aabbbbc
Match	aacc
Skip	a
```

**Lesson8**: Characters optional

As you saw in the previous lesson, the Kleene star and plus allow us to match repeated characters in a line.

Another quantifier that is really common when matching and extracting text is the `?` (question mark) metacharacter which denotes optionality. This metacharacter allows you to match either zero or one of the preceding character or group. For example, the pattern `ab?c` will match either the strings "abc" or "ac" because the b is considered optional.

**Similar to the dot metacharacter, the question mark is a special character and you will have to escape it using a slash `\?` to match a plain question mark character in a string.**

In the strings below, notice how the the plurality of the word "file" depends on the number of files found. Try writing a pattern that uses the optionality metacharacter to match only the lines where one or more files were found.

```bash
\?

Match	1 file found?
Match	2 files found?
Match	24 files found?
Skip	No files found.
```

**Lesson9**: All this whitespace

When dealing with real-world input, such as log files and even user input, it's difficult not to encounter whitespace. We use it to format pieces of information to make it easier to read and scan visually, and a single space can put a wrench into the simplest regular expression.

The most common forms of whitespace you will use with regular expressions are the space (` `), the tab (`\t`), the new line (`\n`) and the carriage return (`\r`) (useful in Windows environments), and these special characters match each of their respective whitespaces. In addition, a whitespace special character `\s` will match any of the specific whitespaces above and is extremely useful when dealing with raw input text.

In the strings below, you'll find that the content of each line is indented by some whitespace from the index of the line (the number is a part of the text to match). Try writing a pattern that can match each line containing whitespace characters between the number and the content. Notice that the whitespace characters are just like any other character and the special metacharacters like the star and the plus can be used as well.

```bash
.[\s+]

Match	1.   abc
Match	2.	abc
Match	3.           abc
Skip	4.abc
```

**Lesson 10**: Starting and ending

So far, we've been writing regular expressions that partially match pieces across all the text. Sometimes this isn't desirable, imagine for example we wanted to match the word "success" in a log file. We certainly don't want that pattern to match a line that says "Error: unsuccessful operation"! That is why it is often best practice to write as specific regular expressions as possible to ensure that we don't get false positives when matching against real world text.

One way to tighten our patterns is to define a pattern that describes both the start and the end of the line using the special `^` (hat) and `$` (dollar sign) metacharacters. In the example above, we can use the pattern `^success` to match only a line that begins with the word "success", but not the line "Error: unsuccessful operation". And if you combine both the hat and the dollar sign, you create a pattern that matches the whole line completely at the beginning and end.

Note that this is different than the hat used inside a set of bracket `[^...]` for excluding characters, which can be confusing when reading regular expressions.

Try to match each of the strings below using these new special characters.

```bash
[^n]successful$

Match	Mission: successful
Skip	Last Mission: unsuccessful
Skip	Next Mission: successful upon capture of target
```

**Lesson 11**: Match groups

Regular expressions allow us to not just match text but also to extract information for further processing. This is done by defining groups of characters and capturing them using the special parentheses `(` and `)` metacharacters. Any subpattern inside a pair of parentheses will be captured as a group. In practice, this can be used to extract information like phone numbers or emails from all sorts of data.

Imagine for example that you had a command line tool to list all the image files you have in the cloud. You could then use a pattern such as `^(IMG\d+\.png)$` to capture and extract the full filename, but if you only wanted to capture the filename without the extension, you could use the pattern `^(IMG\d+)\.png$` which only captures the part before the period.

Go ahead and try to use this to write a regular expression that matches only the filenames (not including extension) of the PDF files below.

```bash
^(.*).pdf$

                                         This is captured text we get as EXPECTED!
Capture	file_record_transcript.pdf	    file_record_transcript
Capture	file_07241999.pdf	              file_07241999
Skip	testfile_fake.pdf.tmp
```

**Lesson 12**: Nested groups

When you are working with complex data, you can easily find yourself having to extract multiple layers of information, which can result in nested groups. Generally, the results of the captured groups are in the order in which they are defined (in order by open parenthesis).

Take the example from the previous lesson, of capturing the filenames of all the image files you have in a list. If each of these image files had a sequential picture number in the filename, you could extract both the filename and the picture number using the same pattern by writing an expression like `^(IMG(\d+))\.png$` (using a nested parenthesis to capture the digits).

The nested groups are read from left to right in the pattern, with the first capture group being the contents of the first parentheses group, etc.

For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.

```bash
(...\s(\d{4}))


Task	  Text	    Capture Groups	
                  1st         2nd
Capture	Jan 1987	Jan 1987    1987
Capture	May 1969	May 1969    1969
Capture	Aug 2011	Aug 2011    2011
```


**Lesson 13**: More group work

**As you saw in the previous lessons, all the quantifiers including the star `\*`, plus `+`, repetition `{m,n}` and the question mark `?` can all be used within the capture group patterns. This is the only way to apply quantifiers on sequences of characters instead of the individual characters themselves.**

For example, if I knew that a phone number may or may not contain an area code, the **right pattern would test for the existence of the whole group of digits `(\d{3})?` and not the individual characters themselves (which would be wrong).**

Depending on the regular expression engine you are using, you can also use non-capturing groups which will allow you to match the group but not have it show up in the results.

Below are a couple different common display resolutions, try to capture the width and height of each display.

```bash
(.+)x(.+)

Task	  Text	      Capture Groups	
                    1st         2nd
Capture	1280x720	  1280        720
Capture	1920x1600	  1920        1600
Capture	1024x768	  1024        768
```


**Lesson 14**: It's all conditional

As we mentioned before, it's always good to be precise, and that applies to coding, talking, and even regular expressions. For example, you wouldn't write a grocery list for someone to Buy more .* because you would have no idea what you could get back. Instead you would write Buy more milk or Buy more bread, and in regular expressions, we can actually define these conditionals explicitly.

Specifically when using groups, you can use the `|` (logical OR, aka. the pipe) to denote different possible sets of characters. In the above example, I can write the pattern `Buy more (milk|bread|juice)` to match only the strings `Buy more milk`, `Buy more bread`, or `Buy more juice`.

Like normal groups, you can use any sequence of characters or metacharacters in a condition, for example, `([cb]ats*|[dh]ogs?)` would match either `cats` or `bats`, or, `dogs` or `hogs`. Writing patterns with many conditions can be hard to read, so you should consider making them separate patterns if they get too complex.

Go ahead and try writing a conditional pattern that matches only the lines with small fuzzy creatures below.

```bash
(cats|dogs)

Task	Text	 
Match	I love cats
Match	I love dogs
Skip	I love logs
Skip	I love cogs
```


**Lesson 15**: Other special characters

This lesson will cover some extra metacharacters, as well as the results of captured groups.

We have already learned the most common metacharacters to capture digits using `\d`, whitespace using `\s`, and alphanumeric letters and digits using `\w`, but regular expressions also provides a way of specifying the opposite sets of each of these metacharacters by using their upper case letters. For example, `\D` represents any non-digit character, `\S` any non-whitespace character, and `\W` any non-alphanumeric character (such as punctuation). Depending on how you compose your regular expression, it may be easier to use one or the other.

Additionally, there is a special metacharacter `\b` which matches the boundary between a word and a non-word character. It's most useful in capturing entire words (for example by using the pattern `\w+\b`).

One concept that we will not explore in great detail in these lessons is back referencing, mostly because it varies depending on the implementation. However, many systems allow you to reference your captured groups by using \0 (usually the full matched text), `\1` (group 1), `\2` (group 2), etc. This is useful for example when you are in a text editor and doing a search and replace using regular expressions to swap two numbers, you can search for `(\d+)-(\d+)` and replace it with `\2-\1` to put the second captured number first, and the first captured number second for example.

Below are a number of different strings, try out the different types of metacharacters or anything we've learned in the previous lessons and continue on when you are ready.

*LOL BELOW WAS A CRAZY SOLUTION:*

```bash
.*

Task	Text	 
Match	The quick brown fox jumps over the lazy dog.
Match	There were 614 instances of students getting 90.0% or above
Match	The FCC had to censor the network for saying &$#*@!.
```

> ***LEARN MORE: There are still topics within regular expressions that we have not yet explored, – things like greedy vs. non-greedy expressions, posix notation and more. We will try to elaborate more on these in future lessons.***

***[PENDING: Continue doing problems here (they are really interesting)](https://regexone.com/problem/matching_decimal_numbers).***

Thanks for reading.

> Sahil Rajput
