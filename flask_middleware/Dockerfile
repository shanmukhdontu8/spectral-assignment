FROM python:3.9-slim
COPY requirements.txt .
RUN pip install -r requirements.txt
WORKDIR /flask_middleware
EXPOSE 5000
CMD ["python", "app.py"]

