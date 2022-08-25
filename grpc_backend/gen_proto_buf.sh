python -m grpc_tools.protoc --proto_path=./ --python_out=./ --grpc_python_out=./ ./protos/meter.proto
# cp to flask_middleware