from fastapi import FastAPI
from routes import user_routes, product_routes

app = FastAPI(
    title="API Documentation Generator",
    description="Generate Swagger documentation automatically for your APIs",
    version="1.0.0"
)

# Register Routes
app.include_router(user_routes.router, prefix="/users", tags=["Users"])
app.include_router(product_routes.router, prefix="/products", tags=["Products"])

