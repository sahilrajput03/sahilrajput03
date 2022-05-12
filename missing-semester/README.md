# missing-semester

- Lecture 1(+Lecture-3,4,7,8,9,10) - Shell : [Click here](./LECTURE1,3,4,7,8,9,10,11.md)
- Lecture 2 - Shell Tools and Scripting : [Click here](LECTURE2.md)
- Lecture 3 - Editors (Vim)
- Lecture 4 - Data Wrangling
- Lecture 5 - Command-line Environment (Deep dive into `ssh`): [Click here](LECTURE5.md)
- Lecture 6 - Version Control (Git) : [Click here](LECTURE6.md)
- Lecture 7 - Debugging and Profiling
- Lecture 8 - Metaprogramming
- Lecture 9 - Security and Cryptography
- Lecture 10 - Q&A


# Run a script over ssh on a remote computer

File `a.sh`

```bash
cat a.sh
# Output
#!/bin/bash
echo $(date) >> /tmp/a
```

**Executing**

```bash
ssh pi 'bash' < a.sh
# src: https://stackoverflow.com/a/2732991/10012446
```
