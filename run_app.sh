#!/bin/bash

# https://spin.atomicobject.com/2017/08/24/start-stop-bash-background-process/
trap "exit" INT TSTP TERM ERR
trap "kill 0" EXIT
cd grpc_backend
bash run_grpc.sh &
cd ../flask_middleware
bash run_flask.sh &
cd ../react_frontend/meter-reading-app
bash run_react.sh &
wait
