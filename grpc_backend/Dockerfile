FROM python:3.9-slim
COPY requirements.txt .
RUN pip install -r requirements.txt
WORKDIR /grpc_backend
CMD ["python", "grpc_backend_server.py"]