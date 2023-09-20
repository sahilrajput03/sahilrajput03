# Google Calendar

## Bookmark these for accessing per day events in calendar

```bash
# hello world with bookmark scripting
javascript:(() => alert('hello'))();

# Today - Calendar Events
javascript:(() => { let today = new Date().toISOString().split('T')[0].replaceAll('-', ''); window.location  = `https://calendar.google.com/calendar/u/0/r/search?start=${today}&end=${today}` })();

# Tomorrow - Calendar Events
javascript:(() => { const today = new Date(); const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);let tomorrowFormatted = tomorrow.toISOString().split('T')[0].replaceAll('-', ''); window.location  = `https://calendar.google.com/calendar/u/0/r/search?start=${tomorrowFormatted}&end=${tomorrowFormatted}` })();

# Day After Tomorrow - Calendar Events
javascript:(() => { const today = new Date(); const dayAfterTomorrow = new Date(today); dayAfterTomorrow.setDate(today.getDate() + 2);let dayAfterTomorrowFormatted = dayAfterTomorrow.toISOString().split('T')[0].replaceAll('-', ''); window.location  = `https://calendar.google.com/calendar/u/0/r/search?start=${dayAfterTomorrowFormatted}&end=${dayAfterTomorrowFormatted}` })();
```

## Reminders removed completely from google calendar and turned into tasks

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/edbc9928-0ccc-439d-a17f-261a326402de)

## Checker plus for Google Calendar - 1

![image](https://user-images.githubusercontent.com/31458531/235355919-b09c9fde-b0fb-4954-8b3f-fb4caabfd6e6.png)


## Checker plus for Google Calendar - 2

You can snooze in interesting ways!!

![image](https://user-images.githubusercontent.com/31458531/235356054-bdb0f470-4c91-492b-80ad-e66dbc92d961.png)

## You can toggle between view with key in google calendar

```txt
d - day wise
w - Week wise
m - month wise
y - year wise

4 - 4 days wise
a - schedule wise (personal favourite)
```


## You can email a list of people for an event like that

![image](https://user-images.githubusercontent.com/31458531/223677550-8f84b2a1-db6d-47f2-9703-e6ca984f4789.png)


## You can now propose a different time for a meeting as well now

![image](https://user-images.githubusercontent.com/31458531/187061831-5e107b7e-665e-4a98-bbea-0933dd644c60.png)

![image](https://user-images.githubusercontent.com/31458531/187061921-0718776b-b436-42c0-ad85-01598ec45053.png)


## Cluttered view in your calendar ?

- Try toggling calendars under **My Calendars** for Sahil Rajput, Birthdays, Family, Reminders and Tasks.
- Try turning off calendars under **Other Calendars** for Holidays in India, Muslim Holidays and Phases of Moon.

## You can have appointment page for bookings via google calendar now as well

*Similar to how calendly does that.*

Source: https://youtu.be/7AsmRNiveGc

