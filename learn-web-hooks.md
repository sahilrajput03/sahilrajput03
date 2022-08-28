# learn heroku webhooks

Tutorial: https://devcenter.heroku.com/articles/app-webhooks-tutorial

So after running this command:

```bash
heroku webhooks:add --include api:release -l sync --url https://totel-webhooks-notificaiton.herokuapp.com/webhooks -s 0bf64c0b00d5b7fc624b66032e01be8d3fb4f30bbdfd2eb90ec8c3461ebddde7 -a $TRIGGER_APP
```

I get belwo image, so that means webhook is added to my target app now:

![image](https://user-images.githubusercontent.com/31458531/186968343-0977a9fd-e106-4a3b-9cc1-7fe61ca1fb98.png)

## This is the event for successful build deployed

![image](https://user-images.githubusercontent.com/31458531/186970233-220075a8-d8e2-48c4-8482-124f3800445a.png)
