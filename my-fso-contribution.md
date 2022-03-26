## Exercise 11.18 Alternative version for Telegram

The Telegram version of this exercise is provided by [Sahil Rajput](https://github.com/sahilrajput03)

NB: In case you end up having a lot of workflows running simultaneously (when you push a commit) in your github actions tab, you can disable all workflows except the one you are currently working on, as shown in the figure.

![](https://i.imgur.com/MJ6QBZF.png)

- To get started, you need to create a telegram bot and to do so you have to start by sending a message <i>/start</i> to <i>@BotFather</i> which is itself a bot to help users in creating and managing their own custom bots. Further, you need to send <i>/newbot</i> to create a new bot of your own, and follow the process. Though the process only consists of asking for name and username (must be unique, e.g., <i>my\_responsible_bot1</i>) for our bot. After creating the bot we can request the token for the bot using <i>/token</i> message.

- Now make a group on telegram, say "My CI-CD Notifications" using your personal telegram account on mobile app or desktop web app of telegram. After that you'll be prompted to add users, just enter your bot's username there (e.g., <i>@my\_responsible_bot1</i>) to add bot to the group. You can also use any existing telegram group too if you want but you need to be administrator of that group to be able to add a bot to it as per telegram's security policies.

Any bot needs a <i>chat id</i> to send any sort of message to a user, group or channel. In telegram, <i>chat id</i> is a unique identifier for any user/group/channel and our bot will use it to send message to the group we just created. Since we added our bot to the group, the backend api of telegram has recorded the event for it and we can see that event's details to fetch the <i>chat id</i> of our group.

To fetch the <i>chat id</i> of the group we can use either of below ways:

- Way 1: Remove your chat bot manually from the group and add it again and we are good to go(ignore this if you added the chat bot to already existing group). We need to do this because there's some issue with adding a chat bot at the time of creating a new group, read the most rated comment of this [stackoverflow answer](https://stackoverflow.com/a/32572159/10012446). Browse https://api.telegram.org/bot<BOT_TOKEN>/getUpdates to view the event log history of our bot, and look for something <i>title: "My CI-CD Notifications"</i> you'll notice there is the <i>id</i> for the group in there too. That is our <i>chat id</i> for the group, it looks something like -123456789. Note the hyphen(-) as it is part of <i>chat id</i>, telegram uses - for groups and channels ids as to distinguish them from user accounts. If reading from the json is struggling for you, there's a easy way to get <i>chat id</i> of the group using way 2.

- Way 2 (**easy way**): Add <i>@getidsbot</i> using <i>Add Member</i> option in group settings and you'll see the <i>chat id</i> of the group as response from this bot along with other details of the group i.e., title, username, etc. After getting <i>chat id</i> of the group you can remove the <i>@getidsbot</i> from the group.

- Add two environment variables to github repo i.e., <i>TELEGRAM\_TO</i> for <i>chat id</i> of the group and <i>TELEGRAM\_TOKEN</i> for the bot's token which we fetched earlier while creating the bot with botfather. You can navigate to <i>Settings > Secrets > New Repository Secret</i> in your github repo to add these environment variables.

- Create a new workflow file say <i>TelegramNotifcation.yml</i> and add a job using [actions/telegram-message-notify](https://github.com/marketplace/actions/telegram-message-notify) github action and try if the messages are delivered to your telegram group. Tip: You can have a default message which includes basic log of the workflow event simply by omitting the <i>args</i> from the [actions/telegram-message-notify](https://github.com/marketplace/actions/telegram-message-notify) job's definition.

#### 11.18: Deliver worflow report messsage directly to user/client's telegram account:

Add another step to your job in existing <i>TelegramNotifcation.yml</i> workflow file to deliver message directly to yourself by using <i>chat id</i> associated with your own account. To do this add  another secret say <i>TELEGRAM\_TO\_ME</i> to your github repo settings. Probably doing this exercise, you would see an error which would break your workflow saying [chat not found](https://stackoverflow.com/a/41291666), this is a security concern made by telegram, so you would first need to send a message to bot first and instantly after that your new workflow events will succeed. This security concern ensures that any chatbot might not end up sending spams to any unauthorized user otherwise any hacker could easily spam you in a variety of way using his/her bot.

Tip: You can get the <i>chat id</i> of your personal telegram account by sending a "Hello" message to <i>@userinfobot</i> simply. You can also use [@userinfobot](https://t.me/userinfobot) link to message the bot directly from mobile or using [web version of telegram](https://web.telegram.org/) on your desktop to send the "Hello" message.
