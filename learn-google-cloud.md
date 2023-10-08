# Learn google cloud

**Quick Links:**
- Google Cloud Console: https://console.cloud.google.com/
- ❤️ Learn Google Console APIs via Oauth2: [Click here](learn-google-console-apis-via-oauth2.md)
  
- **Navigating between settings in gcp vm instances and its firewall settings:**
  - Sidebar > Compute engine> vm instance
  - Sidebar > VPC > Firewall > "indianic one" and add or remove the ip's from there.

- **Docs - Adding ssh keys to gcp platform:** [Docs](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)
- **Connecting via gcloud:**
  
  Source: [Click here](https://www.youtube.com/watch?v=JGcW1QdEQGs) @ youtube
  
  In gcloud you can add the private key like: 
  
  ```bash
  # The pair of keys generated from the ssh-keygen windows's gui app generates private keys in standard format and the cli binary always expect you provide private key in openssh version format.
  # Although if you generate private keys using command below you'll always get key in opennssh format by default, so alwasy use ssh cli to connect and ssh-keygen to generate keys.(*Never use ssh-keygen or putty directly anywhere).
  # check ssh version
  ssh -v
  
  
  # Create ssh key pair
  ssh-keygen
  ## Or you can create sshkyes using key file name
  ssh-keygen -t rsa -b 4096 -f myLocaltWideUser




  
  # In google cloud console, you can go to "Compute Engine" > "VM Instances" then select your instance, and click "EDIT" and in the "SSH Keys" section you can add below entry (and don't forget to to add your instance's user name there which you want to connect to):
  ssh-rsa PUBLIC_KEY_FROM_YOUR_KEY_.PUB_FILE_HERE sahil
  
  # We can ssh using:
  ssh -i myPrivateKey.ppk sahil@123.123.123.123


  # `glcloud` manages creation of ssh keys under the hood though ~ IMO, Sahil
  gcloud beta compute ssh --zone "us-central1-a" "instance-1"  --project "myProject"
  gcloud beta compute ssh --zone "us-central1-a" "instance-2"  --project "myProject" --ssh-key-file myPublic.pub
  ```


## Navigation to API Library

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/1cd88b8c-b054-4dba-9788-dd43a3fed8c5)

**Cloud Functions:**

![image](https://user-images.githubusercontent.com/31458531/200026164-8f7740a7-ca27-47b3-a8dc-b3d485b0694c.png)

**Viewing logs in cloud functions:**

![viewing-logs-in-gcp-cloud-function](https://user-images.githubusercontent.com/31458531/200115158-34eedeed-04b1-4c80-bc5a-bb0c390b447e.png)


**Cloud Build History:**

![image](https://user-images.githubusercontent.com/31458531/200026540-06440cd1-166a-4489-83d1-984d19a1977a.png)

**Others:**

![gc_1](https://user-images.githubusercontent.com/31458531/200034637-49aa269f-db1b-4ca3-9b61-3fc8ff27db96.png)

![gc_2](https://user-images.githubusercontent.com/31458531/200034643-b29eb097-a2be-46c4-a5a3-716cfc1a3a36.png)
