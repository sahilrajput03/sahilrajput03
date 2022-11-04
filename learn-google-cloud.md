# Learn google cloud

- **Navigating between settings in gcp vm instances and its firewall settings:**
  - Sidebar > Compute engine> vm instance
  - Sidebar > VPC > Firewall > "indianic one" and add or remove the ip's from there.

- **Docs - Adding ssh keys to gcp platform:** [Docs](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys)
- **Connecting via gcloud:**
  ```bash
  gcloud beta compute ssh --zone "us-central1-a" "instance-1"  --project "myProject"
  gcloud beta compute ssh --zone "us-central1-a" "instance-2"  --project "myProject" --ssh-key-file myPublic.pub
  ```

**Cloud Functions:**

![image](https://user-images.githubusercontent.com/31458531/200026164-8f7740a7-ca27-47b3-a8dc-b3d485b0694c.png)

![gc_1](https://user-images.githubusercontent.com/31458531/200034637-49aa269f-db1b-4ca3-9b61-3fc8ff27db96.png)

![gc_2](https://user-images.githubusercontent.com/31458531/200034643-b29eb097-a2be-46c4-a5a3-716cfc1a3a36.png)
