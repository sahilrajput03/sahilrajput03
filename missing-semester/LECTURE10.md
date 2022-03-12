# Lecture 10

- d stands for daemon i.e., `systemd`, `sshd` etc
-

```bash
#Show all services running in linux:
systemctl status
```

```bash
# Usage of -- in bash commands
#### -- in any command can tell that don not interpret anything following it as a flag or option, for e.g.,
# Say , we want to create a file name `-i`
touch -i
# Output
touch: invalid option -- 'i'
Try 'touch --help' for more information.
touch -- -i
# Output
ls
# Output (file created)
-i

### Say now we want to remove a file named `-i`
rm -i
# Output
rm: missing operand
Try 'rm --help' for more information.
rm -- -i
ls
# Output: (file removed!)
```

- Vagrant: A tool for creating virtual machines with config files (very similar to docker). It has 23.5k stars on github

```bash
https://www.vagrantup.com/
https://github.com/hashicorp/vagrant
```

docker vs. vagrant:

- https://www.vagrantup.com/intro/vs/docker
- https://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment
