from concurrent import futures

import grpc
import asyncio
from protos.meter_pb2 import MeterReading
import logging
from protos.meter_pb2_grpc import MeterServicer, add_MeterServicer_to_server
logger = logging.getLogger()
logger.info = print

class Meter(MeterServicer):
    async def ReadMeter(self, request, context):
        print("\n\n\ngot requruss")
        print(request)
        # TODO: read from file
        for i in range(10):
            yield MeterReading(time=i, meter_reading=i*10)
            
async def serve():
    server = grpc.aio.server()
    add_MeterServicer_to_server(Meter(), server)
    server.add_insecure_port('[::]:9090')
    logger.info("starting server")
    await server.start()
    logger.info("started server")
    await server.wait_for_termination()
    logger.info("server finish")
    
if __name__ == "__main__":
    print("hihih")
    logger.info("sadhasdgkas")
    asyncio.run(serve())