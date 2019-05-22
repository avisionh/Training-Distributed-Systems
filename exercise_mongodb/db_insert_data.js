/* Database Connection */
// Description: This script does the following:
//				 1. Access our 'library' database if it exists, 
//					 or creates it if it does not exist.
//				 2. Create collections for our 'library' database.
//				 3. Enters data into each of our collections created in (2)
//				 4. Views the collections in a pretty format to ensure
//					 we have entered data into them.

// Useful Links:
//				 1. https://blog.kevinchisholm.com/javascript/mongodb/getting-started-with-mongo-shell-scripting-basic-crud-operations/
//				 2. https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

// 1. Connect to 'library' Database
//	note: non-JS commands that Command Shell provides cannot be executed
//			in a JS file. Thus 'use library' would not executed
//		  instead, will run following equivalent JS code.
//var db = connect('0.0.0.0:27017/library')
db = db.getSiblingDB('library')

// 2. Create collections for 'library' Database
db.createCollection('authors')
db.createCollection('publishers')
db.createCollection('books')

// 3. Enter data into each collection
db.authors.insert({'_id':'AhoAV','lname':'Aho','fname':'Alfred V.','yob':1941})
db.authors.insert({'_id':'HopcroftJE','lname':'Hopcroft','fname':'John E.','yob':1939})
db.authors.insert({'_id':'WirthN','lname':'Wirth','fname':'Niklaus','yob':1934})
db.authors.insert({'_id':'LeisersonCE','lname':'Leiserson','fname':'Charles E.','yob':1953})
db.authors.insert({'_id':'RivestRL','lname':'Rivest','fname':'Ronald L.','yob':1947})
db.authors.insert({'_id':'SteinCL','lname':'Stein','fname':'Clifford S.','yob':1965})

db.publishers.insert({'_id':'PACKT','name':'Packt Publishers Limited','city':'Birmingham','country':'UK'})
db.publishers.insert({'_id':'A-W','name':'Addison-Wesley Longman, Inc.','city':'Reding, MA','country':'US'})
db.publishers.insert({'_id':'MIT','name':'The MIT Press','city':'Cambridge, MA','country':'US'})
db.publishers.insert({'_id':'PH','name':'Prentice Hall, Inc.','city':'Upper Saddle River, NJ','country':'US'})

db.books.insert({'_id':'9781491901632','title':'Hadoop: The Definitive Guide','author':'WhiteT','publisher':'OREILLY','year':2015})
db.books.insert({'_id':'9781449344689','title':'MongoDB: The Definitive Guide','author':'ChodorowK','publisher':'OREILLY','year':2013})
db.books.insert({'_id':'0201000237','title':'Algorithms and Data Structures','author':['AhoAV','HopcroftJE','UllmanJD'],'publisher':'A-W','year':1982})

// 4. Show collections in pretty format
db.authors.find().pretty()
db.publishers.find().pretty()
db.books.find().pretty()

