
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
