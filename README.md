API Documentation

Authentication
    POST /api/auth/register: Register a new user.
    POST /api/auth/login: Log in an existing user and get a JWT token.
    Recipes
    GET /api/recipes: Get all recipes.
    POST /api/recipes: Create a new recipe.
    GET /api/recipes/ : Get a specific recipe by ID.
    PUT /api/recipes/ : Update a specific recipe by ID.
    DELETE /api/recipes/ : Delete a recipe.
    
Environment Variables
    PORT=4000
    MONGODB_URI=mongodb://localhost:27017/recipe
    JWT_SECRET="Vibhu123"

Run the server: 
    npm start

Dependencies: 
    Backend: "axios": "^1.7.7", "bcryptjs": "^2.4.3", "cookie-parser": "^1.4.6", "dotenv": "^16.4.5", "express": "^4.21.0", "jsonwebtoken": "^9.0.2", "mongoose": "^8.7.0" "devDependencies": "nodemon": "^3.1.7"