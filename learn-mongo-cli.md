# Readme

**Quick Links:**
- Learn mongo and mongoosejs - Github Repository: [Click here](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs/tree/master)

**Some used mongodb operators**

- [\$in operator, used in part 8 , ch-d](https://docs.mongodb.com/manual/reference/operator/query/in/)
- [\$exists operator, used in part 8 , ch-d](https://docs.mongodb.com/manual/reference/operator/query/exists/).

**Other Sources**

- Traversy Media: [@gist](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6), Video [@youtube](https://www.youtube.com/watch?v=-56x56UppqQ&t=867s).
- Tutorials Point: [Tutorials point - Mongodb](https://www.tutorialspoint.com/mongodb/index.htm).
- Online mongodb-cli Playground: [Click here - mongoplayground.net](https://mongoplayground.net/), [Click here 2](https://www.humongous.io/app/playground/mongodb)
- Detect a file type restred db file: [Click here](https://stackoverflow.com/a/68232243/10012446)

# Exploring data with official mongodb extension with mogno playground **in vscode**

Docs: [Click here](https://www.mongodb.com/docs/mongodb-vscode/playgrounds/)

*FYI: Using my own way of creatinig files and running them on save with nodemon is much much better though.*

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/18ea6c10-d8c1-4b4d-b60d-cde5c8019398)

# Using mongoexport, mongorestore, etc

- Which one is the preferred choice Mongodump VS Mongoexport for upgrading mongoDB database?: [Click here](https://stackoverflow.com/questions/44562993/which-one-is-the-preferred-choice-mongodump-vs-mongoexport-for-upgrading-mongodb)
- Google Search: [Click here](https://www.google.com/search?q=mongomport+vs.+mongorestore)

# Search using regex in db

**FYI: Its good to do indexing if you have large number of records for efficient searching.**

FYI: In below query you could have used `/` to write concise queries (but online playground doesn't allow that syntax yet):

Learn all about [regext here in docs](https://www.mongodb.com/docs/manual/reference/operator/query/regex/).

**LEARN: `i` option helps to do a case-insensitive search**

```bash
db.collection.find({
  name: {
    "$regex": /hil/i
  }
})
```

![image](https://user-images.githubusercontent.com/31458531/166309109-50d9fc0a-83bb-409e-a015-3c4718017cdc.png)


# Roll

**Note** (*for Windows User*) : `git-bash` isn't performing good with mongo shell environment, so prefer cmd for now.

```bash
# To open a mongo shell environment.
mongo
# TIP: To clear logs in `mongo` shell, use ctrl+L hotkey or use command -> cls


#close mongo shell
Ctrl+c # or use`exit` command 


#show all dbs
show dbs


#to select db (or create **new db** if doesn't exist)
use test1


#shows currently selected db name
db


#Show the collections of currently selected db.
show collections


#creates new collection 'posts' in currently selected db.
db.createCollection('posts')


#Drop a collection named `mycollection`
use myDb # Select a database
db.mycollection.drop() # Drop collection.


# Dropping a db:
use myDb # Select a database
db.dropDatabase() # Drop selected database.


# Insert a post
db.posts.insert({
	title: 'Post One',
	body: 'Body of post one',
	category: 'News',
	likes: 4,
	tags: ['news', 'events'],
	user: {
	name: 'John Doe',
	status: 'author'
	},
	data: Date()
})


# Insert many posts
db.posts.insertMany([
{
	title: 'Post Two',
	body: 'Body of post two',
	category: 'Technology',
	data: Date()
},
{
	title: 'Post Three',
	body: 'Body of post three',
	category: 'News',
	data: Date()
},
{
	title: 'Post Four',
	body: 'Body of post three',
	category: 'Entertainment',
	data: Date()
}
])


# Find posts
db.posts.find()
db.posts.find().pretty()


# Find posts with some filter
db.posts.find({category: 'News'})
db.posts.find({category: 'News'}).pretty()


# Find posts and sort
db.posts.find().sort({title:1}).pretty()
#title: 1 means sort by title in ascending order.


# Find posts and sort in descending order
db.posts.find().sort({title:-1}).pretty()
#title: -1 means sort by title in descending order.


#show first two posts only.
db.posts.find().limit(2)


#show only first two posts in descending ordered list by title property.
db.posts.find().sort({title: -1}).limit(2)


#amazing!!, Print documents in a particular required format
db.posts.find().forEach(function(doc) { print('Blog Post: ' + doc.title)})


#shows only the first found document.
db.posts.findOne({category: 'News'})
```

## Case 1 - `update()` method

```bash
db.posts.find({title: 'Post Random'})

db.posts.update(
	{ title: 'Post Random' },
	{
		title: 'Post Two',
		body: 'New Post 2 body',
		date: Date()
	}
)

db.posts.find({title: 'Post Two'})
```

## Case 2 - `update()` method with `upsert: true`

> *tldr:*
> 1. `update()` method in **Case 1** doesn't create a new document if the searched document doesn't exists.
> 2. `upsert: true` in `update()` method creates a completely new document if the matching document is not found.

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
{
	title: 'Post Two',
	body: 'Body of post two',
	category: 'Technology',
	data: Date()
},
{
	title: 'Post Two',
	body: 'Body of post two - DUPLICATE',
	category: 'Technology - DUPLICATE',
	data: Date()
},
{
	title: 'Post Two - a',
	body: 'Body of post three',
	category: 'News',
	data: Date()
}
])


db.posts.find({title: 'Post Two'})
# Obeservation 1: Shows only the exact two posts that matches i.e., first two posts in the above three posts we added.

db.posts.update(
	{ title: 'Post Two' },
	{
		title: 'Post Two',
		body: 'New Post 2 body',
		date: Date()
	},
	{ upsert: true}
)
# Output: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
# Observation 2: Only the first post(since nModified is 1 that means a single document) that matched the filter is only updated out of two matched!


db.posts.find({title: 'Post Two'})
# Observaion 2: VERIFIED

###IMPORTANT:
# Previous document's data will be OVERWRITTEN.
# The second object is **OPTIONAL**. The second options object in current example tells that if the record doesn't exist then, create it. (upsert name comes from like UPdate OR insERT )
##Watch for next example for CLARIFICATION.


# ___ Debugging commands

# Get all posts
db.posts.find()
```

## Case 3 - `update()` method

*tldr*: Add content to document.

```bash
db.posts.find({title: 'Post Two'}).pretty()

# So this will update a document keeping all the earlier content as it is.
db.posts.update(
	{ title: 'Post Two' },
	{
		$set: {
				body: 'Body of post 2',
				category: 'Techonology',
			  }
	}
)

db.posts.find({title: 'Post Two'}).pretty()
```

## Case 4 - `$inc` operator with `update()` method

*tldr:* The first matching document's likes property will be incremented by 2(if the property doesn't exists then the property will be set to 2).

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
{
	title: 'Post One',
	body: 'Body of post One',
	category: 'Technology',
	data: Date()
},
{
	title: 'Post One',
	body: 'Body of post One - DUPLICATE',
	category: 'Technology - DUPLICATE',
	data: Date()
},
{
	title: 'Post One - a',
	body: 'Body of post One - DUPLICATE - DUPLICATE',
	category: 'News',
	data: Date()
}
])

db.posts.find({title: 'Post One'}).pretty()

db.posts.update(
{title: 'Post One'},
{
	$inc: { likes: 2}
})
# Output: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
# Observation1 : 1 document updated.

db.posts.find({title: 'Post One'}).pretty()
#Observation2 : The very first post is updated with property `likes: 2`.
#Observattion3 : Re-running the last update command will make the property to `likes: 4`
```

## Case 5 - `update()` method

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One - a',
	likes: 10
}
])

db.posts.find({title: 'Post One'}).pretty()
#Observation1: Finds first two document which we added using above command.

db.posts.update(
	{title: 'Post One'},
	{
		$rename: { likes: 'views'}
	}
)
# Output: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
# Observation2: 1 Document updated.

db.posts.find({title: 'Post One'}).pretty()
# PROVES (Observation2): Only the first matched document's property name i.e., `likes` updated to `views`.
```

## `remove()` method

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One - a',
	likes: 10
}
])

db.posts.find({title: 'Post One'}).pretty()
#Observation1: Finds first two document which we added using above command.

db.posts.remove({title: 'Post One'})
# Output: WriteResult({ "nRemoved" : 2 })
# Observation: Two documents updated.
```

## `$set` operator ( subdocuments )

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One',
	likes: 10
},
{
	title: 'Post One - a',
	likes: 10
}
])

db.posts.find({title: 'Post One'}).pretty()
#Observation0: Finds first two document which we added using above command.

db.posts.update(
	{ 	title: 'Post One' },
	{ 	$set:	{
					comments:	[
									{
										user: 'Mary Williams',
										body: 'Comment One',
										date: Date()
									},
									{
										user: 'Harry White',
										body: 'Comment Two',
										date: Date()
									}
								]
				}
	}
)
# Observation1: The first matching document is now has new comment property as added.

db.posts.find({title: 'Post One'}).pretty()
# Below ouput PROVES Observation1
# Output: 
# {
#         "_id" : ObjectId("624de10adfa76c8c1b1fdf35"),
#         "title" : "Post One",
#         "likes" : 10,
#         "comments" : [
#                 {
#                         "user" : "Mary Williams",
#                         "body" : "Comment One",
#                         "date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
#                 },
#                 {
#                         "user" : "Harry White",
#                         "body" : "Comment Two",
#                         "date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
#                 }
#         ]
# }
# {
#         "_id" : ObjectId("624de10adfa76c8c1b1fdf36"),
#         "title" : "Post One",
#         "likes" : 10
# }
# 
```

## `$elemMatch` operator

*tldr:* `$elemMatch` finds a document by searching for the filter against each array element as specified in the search query.

```bash
# Reset our posts collection
db.posts.deleteMany({})

db.posts.insertMany([
	{
			"title" : "Post One",
			"likes" : 10,
			"comments" : [
					{
							"user" : "Mary Williams",
							"body" : "Comment One",
							"date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
					},
					{
							"user" : "Harry White",
							"body" : "Comment Two",
							"date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
					}
			]
	}
])


db.posts.find({ comments: 	{ $elemMatch: {user: 'Mary Williams'}}	}).pretty()
# Output:
# {
#         "_id" : ObjectId("624de303dfa76c8c1b1fdf38"),
#         "title" : "Post One",
#         "likes" : 10,
#         "comments" : [
#                 {
#                         "user" : "Mary Williams",
#                         "body" : "Comment One",
#                         "date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
#                 },
#                 {
#                         "user" : "Harry White",
#                         "body" : "Comment Two",
#                         "date" : "Thu Apr 07 2022 00:20:53 GMT+0530 (IST)"
#                 }
#         ]
# }
```

***->>>> TODO: clean below notes***

## `createIndex()` method

```bash
db.posts.createIndex({ title: 'text' })

db.posts.find(
{
	$text: {
		$search: "\"Post O\""
	}
}).pretty()

#Above serach will match two posts i.e, Post Two and Post Three.

db.posts.find(
{
	$text: {
		$search: "\"Post O\""
	}
}).pretty()

#Above search will match one posts i.e, Post One.
```

## `$set` operator

```bash
db.posts.find({title: 'Post Two'}).pretty()

db.posts.update({title: 'Post Two'}, {$set: { views: 10}})

db.posts.find({title: 'Post Two'}).pretty()
```

## 

```bash
db.posts.find(
{
	views: {
		$gt: 8
	}
}).pretty()

#above will search for documents having their `views` property having value more than 8. This would return multiple documents if there are such matching documents.
```

## `$gte` operator

```bash
db.posts.find(
{
	views: {
		$gte: 8
	}
}).pretty()

#above will search for documents having their `views` property having value more than or EQUAL TO 9. This would return multiple documents if there are such matching documents.
```

Source of this video content: https://www.youtube.com/watch?v=-56x56UppqQ&t=867s

Amazing "Traversy Media - MongoDB Crash Course".

## inspiration 1 - [fullstackopen.com/en](fullstackopen.com/en)

```
db.posts.insert({
	title: 'Post Five',
	fruits: ["mango","apple","banana"]
})

db.posts.find({title: 'Post Five'}).pretty()

db.posts.find(
{
  fruits: {
    $in: ["mango"]
  } 
}).pretty()

#So, thats how $in operator works.
```

## inspiration 2 - [fullstackopen.com/en](fullstackopen.com/en)

```
db.posts.insert({
	title: 'Post Five',
	fruits: ["mango","apple","banana"]
})

db.posts.insert({
	title: 'Post Six',
	fruits: ""
})


db.posts.find({title: 'Post Five'}).pretty()
db.posts.find({title: 'Post Six'}).pretty()







db.posts.find(
{
  fruits: {
    $exists: false
  } 
}).pretty()

#above will return all documents that has does not has fruits property for it.







db.posts.find(
{
  fruits: {
    $exists: true
  } 
}).pretty()

#above will return all documents that has fruits property for it
##Note this will also return document with title "Post Six" @line7 too, as it has fruits property too.
```
