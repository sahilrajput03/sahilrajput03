
## Generating ssh key pairs

**Learn a public key is always contained inside the private key, you can get that public key using openssl anytime. Read extracting public key and ssh-public key generation from private file in cli at https://stackoverflow.com/a/5246045/10012446.** Read how private-public [keys work together here](https://www.devco.net/archives/2006/02/13/public_-_private_key_encryption_using_openssl.php).

```bash
# Simple ssh keys generation:
ssh-keygen
#Note if you give filename as myfile, then output will be: myfile and myfile.pub, where myfile is private key and myfile.pub is public key.


# Generating sshkyes using github recommended algorithm:
ssh-keygen -t ed25519 -C "your_email@example.com"


# Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


# Generate myfile.ppk and myfile.ppk.pub (With no prompts for filename, and do set passphrase in prompts):
ssh-keygen -f myfile.ppk
# Output: Two files will be generated i.e, priv key and public key respectively.
# myfile.ppk  myfile.ppk.pub
```

## ❤️ What does the confirm fingerprint message mean when we connect for the first time to a server?

When we connect to a server via ssh for the first time we see following message 

```bash
ssh someuser@somehost
# ED25519 key fingerprint is SHA256:XNMy8ZTv+eT21BKsGqSGqgLbSD1WG0hiUHbANX5Y2yY. 👈
# This key is not known by any other names.
# Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
# Warning: Permanently added '172.105.61.99' (ED25519) to the list of known hosts.
# Last login: Sun May  4 11:10:09 2025 from 49.156.78.200
# [root@localhost ~]# 
```

❤️Learn: `"This key is not known by any other names":` in above message **means that the SSH client does not recognize the server's key because it is not present in your `~/.ssh/known_hosts` file. This file stores the fingerprints of servers you have connected to before, allowing SSH to verify the server's identity in future connections.**

**❤️Why This Happens:**
1. This message appears when you are connecting to a server for the first time, or if the server's host key has changed.
2. It is a security measure to prevent man-in-the-middle (MITM) attacks, where an attacker could impersonate the server.

**What You Should Do:**
1. Verify the Fingerprint: Confirm that the fingerprint matches the one provided by the server administrator. This ensures you are connecting to the correct server.
2. Add the Key to Known Hosts: If the fingerprint is correct, you can add it to your ~/.ssh/known_hosts file by typing yes when prompted. This will store the key for future connections.
3. Bypass the Prompt (Optional): If you are sure about the server's authenticity and want to bypass the prompt, you can use the `-o StrictHostKeyChecking=no` option in your SSH command - `ssh -o StrictHostKeyChecking=no user@hostname` However, this is not recommended for regular use, as it skips the verification step.

**To view the SSH host key fingerprint on the remote machine and confirm it **matches ✅** the one shown during your SSH connection, you can run below command:**

```bash
#   -l: Show the fingerprint.
#   -f: Specify the file path of the public key.
#   `ssh_host_ed25519_key.pub`: This is the default location of the ED25519 host key.
ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
# Output:
# 256 SHA256:XNMy8ZTv+eT21BKsGqSGqgLbSD1WG0hiUHbANX5Y2yY root@localhost (ED25519) 👈
```

**Note:** If your remote server uses a different key type (e.g., RSA or ECDSA), replace ssh_host_ed25519_key.pub with the appropriate file: `ssh_host_rsa_key.pub` (for RSA) and `ssh_host_ecdsa_key.pub` (for ECDSA).
