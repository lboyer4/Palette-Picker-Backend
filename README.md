# Palette-Picker-Backend

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
    id: 1870,  
    project_id: 1905,  
    color_1: '00FF00',   
    color_2: 'FFFFFF',   
    color_3: '008080',   
    color_4: '008000',   
    color_5: '00FFFF',  
    "created_at": "2019-07-06T18:38:10.378Z",    
    "updated_at": "2019-07-06T18:38:10.378Z"    
    },    
    {  
    id: 1871,  
    project_id: 1906,    
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

#### Link: `http://localhost:3000/api/v1/palettes/1870`

```
[  
    {  
    "id": 1870,  
    project_id: 1905,  
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
"id": 34   
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
"id": 34   
}
```

## Project

### DELETE /api/v1/project/:id

#### Response 

#### Status 200 OK

#### Link: `http://localhost:3000/api/v1/project/60`

```
"Deleted palette with id 35"
```

#### Response

#### Status 404 Not found

#### Link: `http://localhost:3000/api/v1/project/888`

```
{  
    "error": "Could not find project with an id: 888"    
}
```





   


