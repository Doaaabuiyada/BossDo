function each(coll, func) { 
	if (Array.isArray(coll)) { 
		  for (var i = 0; i < coll.length; i++) { 
				func(coll[i], i); 
		  } 
	} else { 
		  for (var key in coll) { 
				func(coll[key], key); 
		  } 
	} 
}


function filter(array, predicate) {

	var acc = [];
  
	each(array, function(element, i) {
  
	  if (predicate(element, i)) {
  
		acc.push(element);
  
	  }
  
	});
  
	return acc;
  
  }





function User(name, DateOfBirth, email, password) {

	var user = {}; 

	user.name = name; 

	user.DateOfBirth = DateOfBirth; 

	user.email = email; 

	user.password= password; 

	user.posts=[];

	user.friends=[]; 

	numberOfFriends= 0 

	//user.id

	// need to know how to genarete id

	return user; 

}



var users= []; 



function signUp(name, DateOfBirth, email, password){

	users.push(User(name, DateOfBirth, email, password))

}

/* function signUp(val,val0, val1,val2){
    console.log(val, val0,val1, val2 ); 
}
 */


function signIn(email, password){

	return filter(users, function(user){

		return (user.email=== email && user.password=== password); 

	})

}



function addPost(userId, post){

	user= filter(users, function(user){

		return (user.id=== userId); 

	})

	user.posts.push(post); 

}



function addFriend(userId, friendId){



	user= filter(users, function(user){

		return (user.id=== userId); 

	})

	friend= filter(users, function(user){

		return (user.id=== friendId); 

	}) 



	user.friends.push(friend); 

	user.numberOfFriends++; 

}
