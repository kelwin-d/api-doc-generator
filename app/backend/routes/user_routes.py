from fastapi import APIRouter
from models.user_model import User

router = APIRouter()

@router.get("/", response_model=list[User])
async def get_users():
    """Fetch all users in the system"""
    return [{"id": 1, "name": "John Doe", "email": "john@example.com"}]

@router.post("/", response_model=User)
async def create_user(user: User):
    """Create a new user"""
    return user

