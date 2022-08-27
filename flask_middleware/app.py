from math import isnan
from grpc import aio
from protos.meter_pb2 import MeterRequest
from protos.meter_pb2_grpc import MeterStub
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

_ip = 'localhost:9090'
@app.route('/meter')
async def server():
    """read Meter data from gRPC server
    """
    async with aio.insecure_channel(_ip) as channel:
        stub = MeterStub(channel)
        meter_readings = []
        async for resp in stub.ReadMeter(MeterRequest()):
            meter_readings.append(meter_readings_to_dict(resp))
        return meter_readings   

def meter_readings_to_dict(meter_readings):
    """converting gRPC response to dictionary
    """
    return { "time": meter_readings.time, \
            "meter_reading": round(meter_readings.meter_reading,2) \
            if not isnan(meter_readings.meter_reading) \
            else None }
    

if __name__ == "__main__":
    app.run(debug=True)
