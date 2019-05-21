/* Querying Collections */
// Description: This script queries the below collections we created in
//				 'db_insert_data.js':
//				 1. authors
//				 2. publishers
//				 3. books

// Q. Find the title(s) of the book(s)in the 'library database' that 
//		Alfred V. Aho is an author.

// A. See below
db.books.aggregate([ 
	{
		// embed 'authors' collection into 'book' collection
		//  so we can filter/match on 'Alfted V. Aho'
		//  via the '_id' field
		$lookup: {   
			from: "authors",   
			localField: "author",   
			foreignField: "_id",   
			as: "authorDetails"  
		} 
	}, 

	{
		$match: { 
			"authorDetails._id": "AhoAV" 
		}
	}
// prettyify the output
]).pretty()
