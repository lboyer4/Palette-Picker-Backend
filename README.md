# Color-Catcher-Backend

Heroku deployment: [color-catcher-backend](https://colorcatcher.herokuapp.com/)

## Project

### GET /api/v1/project

#### Response 

#### Status OK

#### Link: `http://localhost:3000/api/v1/project`

```
[  
    {  
        
        name: "project 1",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    },  
    {  
        
        name: "project 2",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    }   
]   
   ``` 
   
### GET /api/v1/project/:id

#### Response 

#### Status OK

#### Link: `http://localhost:3000/api/v1/project/1`

```
[
    {  
        
        name: "project 1",
        id: 1, 
        "created_at": "2019-07-06T18:38:10.378Z",  
        "updated_at": "2019-07-06T18:38:10.378Z"     
    }
]
```

## Palettes

### GET /api/v1/palettes

#### Response 

#### Status OK

#### Link: `http://localhost:3000/api/v1/palettes`

```
[  
    {
    id: 25,  
    project_id: 35,  
    color_1: '00FF00',   
    color_2: 'FFFFFF',   
    color_3: '008080',   
    color_4: '008000',   
    color_5: '00FFFF',  
    "created_at": "2019-07-06T18:38:10.378Z",    
    "updated_at": "2019-07-06T18:38:10.378Z"    
    },    
    {  
    id: 26,  
    project_id: 36,    
    color_1: '00FF00',     
    color_2: 'FFFFFF',     
    color_3: '008080',     
    color_4: '008000',     
    color_5: '00FFFF' 
    "created_at": "2019-07-06T18:38:10.378Z",  
    "updated_at": "2019-07-06T18:38:10.378Z"  
    }  
  ]
  ```
  
### GET /api/v1/palettes/:id

#### Response 

#### Status OK

#### Link: `http://localhost:3000/api/v1/palettes/26`

```
[  
    {  
    "id": 26,  
    project_id: 36,  
    color_1: '00FF00',   
    color_2: 'FFFFFF',   
    color_3: '008080',   
    color_4: '008000',   
    color_5: '00FFFF',  
    "created_at": "2019-07-06T18:38:10.378Z",    
    "updated_at": "2019-07-06T18:38:10.378Z" 
    }  
]  
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/palettes/999`

```
{  
    "error": "Couldn't find project with id: 999"  
}
```

## Project

### POST /api/v1/project

#### Link: `http://localhost:3000/api/v1/project`

#### Required Parameters:

| Name         | Type           | Description   |
| :---         | :---:          | ---:          |
| project      | string         | project name  |

##### Example:

```
{  
    "name": "my best project 6"  
}
```

#### Response 

#### Status 201 Created

```
{   
"id": 38   
}
```

#### Response

#### Status 422 unprocessable entity

```
{
    "error": "Expected format: { name: <String> } You're missing \"name\" property."
}
```

## Palettes

### POST /api/v1/palettes

#### Link: `http://localhost:3000/api/v1/palettes`

#### Required Parameters:

| Name         | Type           | Description   |
| :---         | :---:          | ---:          |
| color_1      | string         | color_1 hex   |
| color_2      | string         | color_2 hex   |
| color_3      | string         | color_3 hex   |
| color_4      | string         | color_4 hex   |
| color_5      | string         | color_5 hex   |

##### Example:

```
{   
    "color_1": "#CD5C5C",   
    "color_2": "#62504C",
    "color_3": "#FA8072",
    "color_4": "#E9967A",
    "color_5": "##FFA07A",
}
```

#### Response 

#### Status 201 Created

```
{
    "id": 28
}
```

#### Response

#### Status 422 unprocessable entity

```
{
    "error": "Expected format: { name: <String> } You're missing \"color_1\" property."
}
```

## Project

### PUT /api/v1/project/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3000/api/v1/project/33`

```
"OK"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/project/333`

```
{
    "error": "Couldn't update: Project does not exist"
}
```

## Palettes

### PUT /api/v1/palettes/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3000/api/v1/palettes/23`

```
"OK"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/palettes/223`

```
{
    "error": "Couldn't update: Palette does not exist"
}
```

## Project

### DELETE /api/v1/project/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3000/api/v1/project/33`

```
"Deleted project with id 33"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/project/335`

```
{
    "error": "Could not find project with id: 335"
}
```

## Palettes

### DELETE /api/v1/palettes/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3000/api/v1/palettes/23`

```
"Deleted palette with id 23"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/palettes/253`

```
{
    "error": "Could not find palette with id: 253"
}
```





   


