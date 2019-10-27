//Console.log out elements in JSON file
data = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}
for (var i = 0; i < data.video[i].author.data[i]; i++); {
console.log(data.video[i]);
console.log(data.video[i].author.data[i])};