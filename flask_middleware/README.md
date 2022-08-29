## Flask middleware

## Option 1: Running flask middleware server using actual steps

### Step 1. Create python 3.9.1 virtual environment

```bash
virtualenv -p 3.9.1 venv
```

### Step 2. Activate the virtualenv

```bash
source $PWD/venv/bin/activate
```

### Step 3. Install all the packages required for flask server

```bash
pip install -r 'requirements.txt'
```

### Step 4. Run flask middleware server

```bash
python app.py
```

#

## Option 2: Running flask middleware server from a bash script

#### Step 1. -> Step 2. -> Step 3. -> Step 4. will be executed

```bash
bash run_flask.sh
```

#

### Guide

This is the flask middleware server folder \
The app server has an endpoint `/meter` which serves the gRPC response to the frontend server.

#

### Libraries

- [https://flask.palletsprojects.com/en/2.2.x/]() - `flask`
- [https://flask.palletsprojects.com/en/2.2.x/async-await/]() - `flask[async]`
- [https://flask-cors.readthedocs.io/en/latest/]() - `Flask-CORS`
- [https://grpc.io/docs/languages/python/quickstart/]() - `gRPC`
- [https://grpc.io/docs/languages/python/quickstart/#grpc-tools]() - `gRPC Tools`
- [https://docs.pytest.org/en/7.1.x/]() - `pytest`

  Runs the app in the development mode.\
  Open [http://localhost:5000/meter](http://localhost:3000/meter) to check the response in your browser.
