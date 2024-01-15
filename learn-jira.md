# Learn Jira

## Quick Links
- Jira Pricing Page: [Click here](https://www.atlassian.com/software/jira/pricing)
- How to view all logged time by users in Jira?: [Click here](https://community.atlassian.com/t5/Marketplace-Apps-Integrations/How-to-view-all-logged-time-by-users-in-Jira/ba-p/1633245) (not directly provided by jira, but there are paid and free version of other extensions in jira for this)
- Migrate between team-managed and company-managed projects: [Click here](https://support.atlassian.com/jira-software-cloud/docs/migrate-between-team-managed-and-company-managed-projects/)
- How to see the report of logged time: [Click here](https://community.atlassian.com/t5/Marketplace-Apps-Integrations/How-to-see-the-report-of-logged-time/qaq-p/1850289)

## This section is helpful to view notifications in Jira

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/8402093c-7338-43be-890e-3a7c0cff79f1)

## Adding/Editing/Deleting Status in Jira

There are two ways to open "Edit Workflow" section.

1. Using Settings:

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/b5209b58-581c-4d70-aa15-a9bc4d92fc9f" width="700" />

2. From backlog directly:

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f0e32e26-f67b-4bd4-a18d-50695f3000ca" width="700" />

Click on "Edit Workflow" from here:

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/9b71f704-a38a-41a9-898f-9ef444dfac93" width="700" />

You can add more statuses like that:

<img src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/a733f053-29f4-42ba-b732-cd15075b07fe" width="700" />

## Filter for custom fields can be added too like that

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/4d8ab398-8aad-4ec1-a5d5-f8bc7c414bff)

## Amazing custom filters in Jira with JQL (Jira Query Language)

**Docs of JQL:** [Click here](https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/)

**Current filter used in project**

```
# NAME: Work Queue - Assignee
# DESCRIPTION: Helps to know the queue of tasks assigned to you.
# QUERY: (assignee = currentUser()) AND (status = "Changes Requested" OR status = "In Progress" OR status = "To Do")

```

A filter I made:

![image](https://user-images.githubusercontent.com/31458531/233393413-cbfa442d-b9c4-451c-813b-bc0aef4b5fff.png)

Another filter I made:

`(status = "Changes Requested" OR status = "In Progress" OR status = "To Do") AND assignee = currentUser()`

![image](https://user-images.githubusercontent.com/31458531/233698999-5e0136af-0bf8-47fc-a75f-01cb6b115379.png)

Other examples:

![image](https://user-images.githubusercontent.com/31458531/233391329-a7b2a4d9-e808-4317-84c8-729633f6a523.png)

## Restrict the option to export Issues

- OFFICIAL JIRA TICKET: Restrict the option to export Issues: [Click here](https://jira.atlassian.com/browse/JRACLOUD-74232)
- OFFICIAL Article - How to restrict project access for teams in Jira Cloud: [Click here](https://confluence.atlassian.com/cloudkb/how-to-restrict-project-access-for-teams-in-jira-cloud-953142266.html#:~:text=Go%20to%20Jira%20settings%20%3E%20Issues,project%20role%20we%20previously%20created.)

## Creating a "Software Project - Scrum"

![image](https://user-images.githubusercontent.com/31458531/224456557-5be6186b-62a1-4132-ad6b-9eba7782ca05.png)

After creating the project it would look like that:

![image](https://user-images.githubusercontent.com/31458531/224456786-b9a2a28e-74f3-4b8c-a199-7713f9e357f6.png)

## You can edit and update a sprint info like that

![image](https://user-images.githubusercontent.com/31458531/223857154-0f84b1c9-1d14-4e3b-8163-ec610be9d908.png)

**Edit Sprint Dialog Box -**

![image](https://user-images.githubusercontent.com/31458531/223857248-20df36da-1313-4571-9156-f320d915a158.png)


## You can complete a sprint and move open issues simply like that

![image](https://user-images.githubusercontent.com/31458531/223856459-d3436f79-a06c-4104-a1cc-bdddbd2ee7b3.png)

![image](https://user-images.githubusercontent.com/31458531/223855688-2f6b306d-4b8d-482d-ad31-eb5a642ad99c.png)

## You can open a ticket in new tab and copy link to the ticket by this

![image](https://user-images.githubusercontent.com/31458531/231019162-5afb86ff-d3dd-4a23-a1f1-1f58366ca02d.png)

## We can copy link of an issue by right clicking the ticket icon

![image](https://user-images.githubusercontent.com/31458531/212739390-3046d0ef-c431-4c19-82fc-c55535e74de0.png)


## We can edit/delete the time logged for an ticket like that

![image](https://user-images.githubusercontent.com/31458531/212199481-659e6791-e4a7-4811-9516-0c2e109c11bd.png)


## Thats the meaning of those time there on the top

![image](https://user-images.githubusercontent.com/31458531/211866053-2a701db5-1842-4804-a2fb-9f44004ad848.png)

## Thats how you copy a link for a ticket

![image](https://user-images.githubusercontent.com/31458531/209659882-554de026-6ad9-4a02-9866-b00c31d87eb2.png)

## You can view the creation date of a task

![image](https://user-images.githubusercontent.com/31458531/210079151-02231676-a150-482c-bc31-1b87b400dd02.png)

## Using time tracking with Jira

![image](https://user-images.githubusercontent.com/31458531/211296496-18b264d2-2d1e-4634-aae3-fce69d735cb7.png)

![image](https://user-images.githubusercontent.com/31458531/211296610-b1c11e1d-1de9-47f2-96f2-a8492d547072.png)

## You can get time tracking reports like that

![image](https://user-images.githubusercontent.com/31458531/211300083-d9083b9c-8410-4d37-b4e0-943de2e16c14.png)


## You can set your profile details in jira there

[Click here](https://id.atlassian.com/manage-profile/profile-and-visibility)

![image](https://user-images.githubusercontent.com/31458531/211522913-2a9f6019-9bcb-4ade-a72d-05f19ef82710.png)

## When you create a new task in Jira its not assigned to anyone (i.e., **Unassigned**)

![image](https://user-images.githubusercontent.com/31458531/211523778-60606b1e-3941-46ce-af3c-37f29e15ef2a.png)

## You can change project key like that:

![image](https://user-images.githubusercontent.com/31458531/211524068-81189f50-e7bd-4517-912a-e7a0eb09877b.png)


## You can collape columns as well

![image](https://user-images.githubusercontent.com/31458531/212152140-235af09a-c25d-4f99-998e-be21b0fb7e97.png)

![image](https://user-images.githubusercontent.com/31458531/212152205-80c86050-0088-4d35-a5d3-982fc7a5abe0.png)
