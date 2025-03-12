# Backend (FastAPI)
FROM python:3.11-slim AS backend

WORKDIR /app
COPY /app/backend /app
RUN pip install -r requirements.txt

# Frontend (React.js)
FROM node:20 AS frontend

WORKDIR /app
COPY /app/frontend /app
RUN npm install && npm run build

# Final Container
FROM python:3.11-slim
WORKDIR /app

# Copy backend & frontend build
COPY --from=backend /app /app
COPY --from=frontend /app/build /app/static

# Expose Ports
EXPOSE 8000

# Start Backend
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

