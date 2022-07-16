# Hasura

- ***Hasura was founded in July, 2017.***
- its unicorn: [click here](https://economictimes.indiatimes.com/tech/funding/hasura-raises-100-million-becomes-tenth-startup-unicorn-of-2022/articleshow/89754612.cms)
- What is Hasura? | source: [click here](https://hasura.io/blog/what-is-hasura-ce3b5c6e80e8/) | 20 JANUARY, 2020 | 3 MIN READ: The Hasura GraphQL Engine is a blazing-fast GraphQL server that gives you instant, realtime GraphQL APIs over Postgres, with webhook triggers on database events, and remote schemas for business logic.  Hasura helps you build GraphQL apps backed by Postgres or incrementally move to GraphQL for existing applications using Postgres. The Hasura GraphQL Engine is open-source. You can check out the complete repo here.
- About Hasura Company and Team: [click here](https://hasura.io/about/)
- Tanmai Gopal (co-founder) | [Linkedin](https://www.linkedin.com/in/tanmaig/) | [Blogs](https://hasura.io/blog/@tanmaig/)
- Rajoshi Ghosh(co-founder) | [Linkedin](https://www.linkedin.com/in/rajoshighosh/) 
- watch what is hasura from Tanmai Gopal - [click here](https://www.youtube.com/watch?v=Cq77mu-RAZk)
- Who is using Hasura? [case studies - click here](https://hasura.io/case-studies/), [other companies](https://discovery.hgdata.com/product/hasura)
- **Getting started with hasura locally - Docs:** [click here](https://hasura.io/docs/latest/graphql/core/getting-started/index/)
- **Getting started with hasura locally - Docs:** [click here](https://hasura.io/docs/latest/graphql/core/getting-started/index/)
- **Start Locally with docker:** [Click here](https://hasura.io/docs/latest/graphql/core/getting-started/docker-simple/)
- **Fireshipio - Hasura:** [Click here](https://www.youtube.com/watch?v=xiZ61BkMKo8)
- **Hasura - Getting Started (Your First Query) @youtube:** [Click here](https://youtu.be/ZGKQ0U18USU)

# Creating managed permissions - Yo

Src:

1. ![image](https://user-images.githubusercontent.com/31458531/179343358-c1b3e6fa-26e3-4879-b42d-85e801ac815b.png)
2. ![image](https://user-images.githubusercontent.com/31458531/179343402-4e3811b3-5572-4210-9655-e492ef852031.png)
3. Add Table: ![image](https://user-images.githubusercontent.com/31458531/179344325-f78ca07d-fa83-46fa-a141-c679ea845e8e.png)
4. Add foreign key like that: ![image](https://user-images.githubusercontent.com/31458531/179343539-87b5eb43-4cce-444b-a144-d063fce37d33.png)
5. Add this relationship: ![image](https://user-images.githubusercontent.com/31458531/179344367-23399c5a-019d-43e8-964e-6471bb09997b.png)
6. We are going to use deafult `employees` text there: ![image](https://user-images.githubusercontent.com/31458531/179344381-713d6941-3fa3-468c-85dc-83b38507e166.png)
7. Add the object relationship as well (This is Manager Relation): ![image](https://user-images.githubusercontent.com/31458531/179344404-71c2f2f8-3325-43f1-b2a5-2bf68b75ab6e.png)
8. Add another table and save the table: ![image](https://user-images.githubusercontent.com/31458531/179344476-e1e430f1-c207-4216-b118-7de02ac62114.png)
9. Now Add foreign key like that: ![image](https://user-images.githubusercontent.com/31458531/179344517-d5076687-7347-464f-95ae-09923411a02a.png)
10. We can (but we don't) add relation like we added earlier as shwon in there but we'll use `Track` way to add relationship this time(see next screenshot): ![image](https://user-images.githubusercontent.com/31458531/179344523-947c75c1-94ec-453d-8a7d-2cce0b8558e3.png)
11. Click on `Track All` to track all realtions automatically: ![image](https://user-images.githubusercontent.com/31458531/179344574-e2e4f9dc-9e49-4b87-b2f5-b61f827cfca0.png)
12. We can see that relationship is set successfully between payroll and employee: ![image](https://user-images.githubusercontent.com/31458531/179344610-acc7a906-07da-420e-af6d-d974d63fe5a9.png)
13. Lest make `manager_id` field as nullable: ![image](https://user-images.githubusercontent.com/31458531/179344703-c7f74c1a-d8e8-4727-a114-ecd09e963f0f.png)
14. Lets add employees now:

![image](https://user-images.githubusercontent.com/31458531/179344734-e9c22f65-3c26-4e57-af8c-8878fb47b491.png)

![image](https://user-images.githubusercontent.com/31458531/179344739-8d115697-f991-4864-aba1-aeb7c57412da.png)

We can see that Janet and Michael are added: ![image](https://user-images.githubusercontent.com/31458531/179344776-e177c8a6-c454-4381-a47e-59c7d7e365b9.png)

Now we use `Michael's id` as highlighed in above screenshot to be as `manager_id` for filed of Elanor and Chiddi:

![image](https://user-images.githubusercontent.com/31458531/179344810-58c8e1cc-0ae6-4a7d-8f2a-3cb8174b34af.png)

![image](https://user-images.githubusercontent.com/31458531/179344819-be5d7982-e275-41f2-a92c-fcc1699155d9.png)

We can see the results as expected: ![image](https://user-images.githubusercontent.com/31458531/179344833-e45b2020-b636-46a2-9059-71164a4b016d.png)

15. Lets create payroll entries:

Janet (using Janet's id): ![image](https://user-images.githubusercontent.com/31458531/179344881-ec435773-e64e-4279-9bfb-a0882a8e6569.png)

Michael (using Michael's id): ![image](https://user-images.githubusercontent.com/31458531/179344975-2611473a-779a-4b16-ab8b-498c870656ba.png)

Elanor (using Elanor's id): ![image](https://user-images.githubusercontent.com/31458531/179344991-da8d5821-0798-466b-a635-7955b1832146.png)

Chiddi (using Chidd's id): ![image](https://user-images.githubusercontent.com/31458531/179345008-33fe0e82-c60d-449b-8cca-e16a2960b832.png)

Now in payroll we can see all the entries: ![image](https://user-images.githubusercontent.com/31458531/179345018-23c4ea68-2312-4d1a-beb0-8cbf8ca49af1.png)


16. Querying in graphiql we can see such data which says Michael is manager for Elanor and Chidi: ![image](https://user-images.githubusercontent.com/31458531/179345079-b6ea4039-92a2-48e7-b9dd-1a8a0d2d29f8.png)

17. We can see employees for employees i.e., for Michael we can see he has employees as Elanor and Chidi: ![image](https://user-images.githubusercontent.com/31458531/179345189-7790efaa-526b-4e7b-8da5-85cd2722ac2d.png)

18. We can see emoyees and salaries in payroll table: ![image](https://user-images.githubusercontent.com/31458531/179345240-77a9efae-0e90-4e1d-9761-fe97fc841099.png)

19. Setting up permission for HR (insert* permission) and save that: ![image](https://user-images.githubusercontent.com/31458531/179345323-6bc3720f-e6e4-4b5f-93b0-db39a35b21ba.png)

20. Now we clone the permission for select, update and delete as well by doing that: ![image](https://user-images.githubusercontent.com/31458531/179345387-d427dfb2-39de-4cb5-9196-d0acb49015d6.png)

21. We can see that HR now has all the permissions for insert, select, update and delete: ![image](https://user-images.githubusercontent.com/31458531/179345420-5d6069a2-7c01-4d05-8f3c-4701197030ae.png)

22. 
