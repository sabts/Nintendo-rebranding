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
Response:
-Status 200
-array de todos los juegos

---

##Users
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
-Informacion del usario
