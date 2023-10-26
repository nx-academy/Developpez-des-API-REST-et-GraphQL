# API REST

Request:

- GET all
```
curl --request GET \
--location 'localhost:3000/bookmarks'
```

- GET one
```
curl --request GET \
--location 'localhost:3000/bookmarks/1'
```

- POST
```
curl --location --request POST 'localhost:3000/bookmarks' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Roadmap"
}'
```

- PUT
```
curl --location --request PUT 'localhost:3000/bookmarks/2' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Foo"
}'
```

- DELETE
```
curl --request DELETE \
--location 'localhost:3000/bookmarks/1'
```
