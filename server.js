const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.post('/login', function(request, response){
    const username = request.body.username;
    const password = request.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if ( username === mockUsername && password === mockPassword){
         response.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         response.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.get('/users', function(request,response){
	response.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(request, response){
	console.log(request.params.id)
	response.json({
		success: true,
		message: 'got one user',
		user: request.params.id
	})
})

app.listen(8000,function(){console.log('server is listening')})