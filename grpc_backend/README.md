## gRPC backend server

## Option 1: Running grpc backend server using actual steps

### Step 1. Create python 3.9.1 virtual environment

```bash
virtualenv -p 3.9.1 venv
```

### Step 2. Activate the virtualenv

```bash
source $PWD/venv/bin/activate
```

### Step 3. Install all the packages required for gRPC server

```bash
pip install -r 'requirements.txt'
```

### Step 4. Run gRPC backend server

```bash
python grpc_backend_server.py
```

#

## Option 2: Running gRPC backend server from a bash script

#### Step 1. -> Step 2. -> Step 3. -> Step 4. will be executed

```bash
bash run_grpc.sh
```

#

### Guide

This is the gRPC backend server folder \
The grpc server listens on port `9090` and responds to flask middleware using protocol buffers created using meter.proto.

To compile the `meter.proto` file definition we need to run:

```bash
 python -m grpc_tools.protoc --proto_path=./ --python_out=./ --grpc_python_out=./ ./protos/meter.proto
```

#

### Libraries

- [https://grpc.io/docs/languages/python/quickstart/]() - `gRPC`
- [https://grpc.io/docs/languages/python/quickstart/#grpc-tools]() - `gRPC Tools`
- [https://docs.pytest.org/en/7.1.x/]() - `pytest`
