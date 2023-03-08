# learn-nestjs

REPOSITORY - https://github.com/sahilrajput03/learn-nestjs/

- Reference project using nestjs: [Click here](https://docs.nestjs.com/fundamentals/circular-dependency)
- Fixing circular dependency: Official Docs: [Click here](https://docs.nestjs.com/fundamentals/circular-dependency)
- Testing with NestJS: [Click here](https://docs.nestjs.com/fundamentals/testing)
- Writing tests with nestjs is awesome: ![image](https://user-images.githubusercontent.com/31458531/185789321-6399c11f-e652-49fd-bf98-7e7a7217fdc1.png)
- Declartive Cron Jobs with NestJS: [Click here](https://docs.nestjs.com/techniques/task-scheduling#declarative-cron-jobs)
- Learn `class-validator`: [Click here](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-classvalidator.md)

***

**How do we perform data-type conversions in params and query dto's?**

We can use `Type` decorator i.e, `@Type` from [`class-transformer`](https://github.com/typestack/class-transformer#working-with-nested-objects).

From official docs: 

![image](https://user-images.githubusercontent.com/31458531/223854237-fc9dcb6f-762d-4723-b9b9-ac8b88bbaa1e.png)

![image](https://user-images.githubusercontent.com/31458531/223854014-42ba73dd-427d-496a-b311-c3acbdf8d4d9.png)


**Fixing circular-dependeny for nestjs - Awesome Article**

**NOTE: My current slasher backend project has a good docs guide in the project readme as well.**

Official Guide from NestJs: [Click here](https://docs.nestjs.com/fundamentals/circular-dependency)

[Click here](https://blog.logrocket.com/avoid-circular-dependencies-nestjs/)

Also, in slasher we can directly make user of models inside the controller's instead of using an serviceMethod of a different service. But this is only feasible if the logic we already have been using a service method for has very simple logic which can be put in controller directly without bringing a lot of complexities to the controller code.

**`Versioning`**

OFFICIAL DOCS: [Click here](https://docs.nestjs.com/techniques/versioning)

**`RouterModule` for adding a prefix to all paths of `Controllers` of a `Module`**

OFFICIAL DOCS: ***Router module***: [Click here](https://docs.nestjs.com/recipes/router-module)

**Note: In below way the module's controllers are accessible at the prefixed path only (no longer accessible without the `prefixed path`).**

![image](https://user-images.githubusercontent.com/31458531/219173592-d5d497e5-dce0-4a2f-a9ef-0049b3da0964.png)

Above image from source, we need to learn that adding `DashboardModule` to the list of `imports` is necessary and also adding `DashboardModule` to the `module` property inside the `RouterModule.register`'s array.


**global interceptors in nestjs:**

Interceptors | NestJs: [Click here](https://docs.nestjs.com/interceptors)

Source: [Click here](https://stackoverflow.com/a/50528691/10012446)

In file `app.module.ts`, you can add a suitable provider like that:

![image](https://user-images.githubusercontent.com/31458531/214636096-887b864d-9f84-46c3-b4c6-97f189e68ebf.png)

*USAGE:*

![image](https://user-images.githubusercontent.com/31458531/214666762-5b4355b7-eb67-4289-91f9-26d7d5c113cf.png)

**Interceptors can be nested in this way I guess:**

![image](https://user-images.githubusercontent.com/31458531/214608033-7b3aa0b8-508b-4429-9492-c2c7ddbf6259.png)

**interceptors in nestjs:**

- *Awesome Documemntation: [Click here](https://docs.nestjs.com/interceptors)*
- *Read my tap and catchError info @ my [learn-rxjs.md](https://github.com/sahilrajput03/sahilrajput03/blob/master/learn-rxjs.md)*
- Attach/get data of `request` object: [Click here-stackoverflow](https://stackoverflow.com/questions/67672251/nestjs-interceptor-append-data-to-incoming-request-header-or-body)

![image](https://user-images.githubusercontent.com/31458531/214398502-1777a7e9-8b39-4de0-8257-2a30886a0679.png)


**http requests, and jest mocking:**

```
    it.only('cool testing', async () => {
      jest.spyOn(httpService, 'get')
      .mockImplementation(() => of({ data: 100, status: 202, statusText: '', headers: {}, config: {} }))
      .mockImplementationOnce(() => of({
        data: 101,
        status: 202,
        statusText: '',
        headers: {},
        config: {},
      }))
      .mockImplementationOnce(() => of({
        data: 102,
        status: 202,
        statusText: '',
        headers: {},
        config: {},
      }));

      const { data: data1 } = await lastValueFrom(httpService.get('/'));
      console.log({ data1 }); // 101

      const { data: data2 } = await lastValueFrom(httpService.get('/'));
      console.log({ data2 }); // 102

      const { data: data3 } = await lastValueFrom(httpService.get('/'));
      console.log({ data3 }); // 100

      const { data: data4 } = await lastValueFrom(httpService.get('/'));
      console.log({ data4 }); // 100
      expect(1).toBe(1);
    });
```

**Other Cool things:**

- **Thats how you can use a model in specification file (test file):**

![image](https://user-images.githubusercontent.com/31458531/211314067-f5feadd3-8dec-439c-8000-231bda4aec5e.png)

- **Using multiple gateways create different socket servers?**

  tldr; **NO**. They use same server instance if they have same ports. Source: [Click here](https://stackoverflow.com/questions/53123523/nestjs-multiple-websocketgateway)

  ![image](https://user-images.githubusercontent.com/31458531/204883573-4d714721-8e8e-4d08-9510-1e52e556bbd8.png)


- **Adding service as dependency injection to the controller.** So this simply means that nestjs will automatically instantiate the service class for us.

![image](https://user-images.githubusercontent.com/31458531/185787421-76aa1b8d-1970-4a95-845c-f14bd800faf1.png)

- Using params:

  ![image](https://user-images.githubusercontent.com/31458531/185787176-9fda4ebe-6c26-4a5e-9031-b5f37259fc57.png)

- Passing route path (as string) to controller decorator. 

  ![image](https://user-images.githubusercontent.com/31458531/185787160-4ec386bc-3b3a-47fe-858c-38baf7cc6f7a.png)

- `nest generate service users`:

  ![image](https://user-images.githubusercontent.com/31458531/185787155-f357065a-aa88-44e2-b16e-0f07a49feae5.png)

- `nest generate controller users`:

  ![image](https://user-images.githubusercontent.com/31458531/185787152-77a0bcdb-8520-4939-8a06-d9ffd4aae169.png)

- `nest generate module users`:

  ![image](https://user-images.githubusercontent.com/31458531/185787148-03299c85-dd7b-45ca-aa5c-711a70608bdf.png)

- `app.module.ts`:

  ![image](https://user-images.githubusercontent.com/31458531/185787137-35d8d1b5-b3c8-40aa-ac44-92efc79d2ea0.png)

- These decorators optionally can have string as first argument to define the path of the api handling of each of them.

  ![image](https://user-images.githubusercontent.com/31458531/185788962-8b4bad04-78e2-4f23-9c1c-16389498f8d7.png)

  ![image](https://user-images.githubusercontent.com/31458531/185788968-eec6bfae-2d0e-4d0a-a6ce-b75273b1be7e.png)


- Thats where the nestjs app starts:

  ![image](https://user-images.githubusercontent.com/31458531/185788213-f7de6a1b-5783-449c-bcb4-7fb65e7688dc.png)

- How three layer architecture works for backends? [Source](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf) *(quite extensive article {not at all for begineers}).*

  ![image](https://user-images.githubusercontent.com/31458531/185788741-0137266c-1558-4beb-b8f5-4599237ae6cc.png)


## Swagger Usage

- We can create new sections in the swagger docs by assigning tags to a controller like that:

  ![image](https://user-images.githubusercontent.com/31458531/185791435-8201d36f-f3cc-420e-9574-9ecda74f0f9d.png)

  and it'll reflect like:

  ![image](https://user-images.githubusercontent.com/31458531/185791444-159f579a-802f-4b01-8ffd-b1cd255b5073.png)
