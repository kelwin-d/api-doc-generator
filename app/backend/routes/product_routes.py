from fastapi import APIRouter
from models.product_model import Product

router = APIRouter()

@router.get("/", response_model=list[Product])
async def get_products():
    """Fetch all available products"""
    return [{"id": 101, "name": "API Testing Tool", "price": 29.99}]

@router.post("/", response_model=Product)
async def create_product(product: Product):
    """Create a new product"""
    return product

