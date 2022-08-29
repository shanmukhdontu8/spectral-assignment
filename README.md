# gRPC based micro-service

## Introduction

## Option 1: Start all servers using a bash script

Inside the root directory `spectral-assignment` of the project.

```bash
bash run_app.sh
```

## Option 2: Start each server independently using a bash script

Inside the `grpc_backend` directory of the project.

```bash
bash run_grpc.sh
```

Inside the `flask_middleware` directory of the project.

```bash
bash run_flask.sh
```

Inside the `react_frontend/meter-reading-app` directory of the project.

```bash
bash run_react.sh
```

## Option 3: Start servers independently

## Step 1. Start the gRPC server

```bash
cd grpc_backend
```

```bash
virtualenv -p 3.9.1 venv
```

```bash
source $PWD/venv/bin/activate
```

```bash
pip install -r 'requirements.txt'
```

```bash
python grpc_backend_server.py
```

## Step 2. Start the flask middleware server

```bash
cd flask_middleware
```

```bash
virtualenv -p 3.9.1 venv
```

```bash
source $PWD/venv/bin/activate
```

```bash
pip install -r 'requirements.txt'
```

```bash
python app.py
```

## Step 3. Start the react frontend server

```bash
cd react_frontend
```

```bash
npm install
```

```bash
npm start
```

#

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
