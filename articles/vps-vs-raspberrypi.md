# ☁️ VPS vs. 🔌 Raspberrypi

2024

VPS (Virtual Private Server) means Linode, AWS, Azure, GCP etc.

**Why VPS** over Raspberry pi?
1. Raspberry pi needs re-installation of OS if linux gets messed up.
2. Raspberry pi needs additional installation of docker/k3s
3. Raspberry pi needs to be handled over broadband (router settings) via port forwarding to make it accessible over internet.
4. Raspberry pi would need static ip (monthly paid) or any other no-ip service to make the dynamic ip actually work for any project to work over longer duration of times.
5. Raspberry pi would need to be setuped for access over ssh.
6. Raspberry pi is strictly dependent on factors like:
	- internet conectivity over broadband
	- electricity on site
7. No fucking wires.

**Why raspberry pi over VPS?**
1. Cheaper in cost i.e., you would save cost around 8-10 thousand probably as if it were hosted on aws as you can host multiple applications on 8GB raspberry pi.