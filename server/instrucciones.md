#Nintendo data

##Games
###Recuperar todos los juegos
collection name: games
url: /api/games

Method: GET
Method: POST
Body:
-name: String
-id (uuid)
-slug: String
-tags: [] + String
-price{digital: number, physical: number}
-description: String
-plataforms: String
-trailerUrl: String
thumnnail{mobile, tablet, desktop} String
-images{mobile, tablet, desktop} String
-genres: String
-ageRating: String
-fileSize: String / Number (en teoria se puede descargar el juego una vez que lo compras en la tienda)
-publisher: String
-playModes: String
-players: String
-languages: String
-franchise: String
-releseDate: String
-preOrderAvailable: true/false
-herobanner String
-overview{headline: String, body: String}
-isOnSale true/false
-nintendoPoints: Numbers

Response:
-Status 200
-array de todos los juegos

###Recuperar el ID de un juego
url: /api/games/gameId
Method: GET

body:
-name: String
-price{digital: number, physical: number}
-description: String
-plataforms: String
-trailerUrl: String
thumnnail{mobile, tablet, desktop} String
-images{mobile, tablet, desktop} String
-genres: String
-ageRating: String
-fileSize: String / Number (en teoria se puede descargar el juego una vez que lo compras en la tienda)
-publisher: String
-playModes: String
-players: String
-languages: String
-releseDate: String
-preOrderAvailable: true/false
-herobanner String
-overview{headline: String, body: String}

Response:
-Status 200
-Se ve la informacion del juego

---

##Users
###Cargar los datos del usario
collection name: users
url: /api/users/userId
Method: GET

Body:
-userID
-userName
-birtday
-userNickname
-region
-email
-password
-favorite
-gamesOwned{gameInfo{date register, code}, game Achivements}
-friends
-points
-profile picture{img, color}
-shoppingCart

Response:
-Status 200
-Informacion del usario

###Registrar al usario
url: /api/user/register
Method: POST

Body:
-userID(se genera)
-birtday
-userName
-userNickname
-region
-email
-password
-profile picture{img, color}

Response:
-Status 200
-Se registra un usuario nuevo

###Log in del usario
url: /api/user/login
Method: POST

Body:
-email
-password

Response:
-Status 200
-El usario de conecta y accede a sus datos

###Desconectar un usario
url: /api/user/logout
Method: GET

Response:
-Status 200
-El usario de desconecta y la pagina vuelve a su estado de no user

###Agregar un producto al carrito
-Method: PATCH
-URL: api/users/cart
-Headers: Authorization: Token

-Body: productId

Response:
-Status: 200
-Response: Se agrega el productoId al carrito

###Guardar como favoritos
-Method: PATCH
-URL: api/users/favorites

-Body: productId

Response:
-Status: 200
-Response: Se agrega el productoId al array de favoritos
