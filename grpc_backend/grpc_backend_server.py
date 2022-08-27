from grpc import aio
from asyncio import run
from logging import getLogger
from protos.meter_pb2_grpc import add_MeterServicer_to_server
from read_csv import Meter

logger = getLogger()
logger.info = print

            
async def serve():
    """GRPC server listening on port 9090
    """
    server = aio.server()
    add_MeterServicer_to_server(Meter(), server)
    server.add_insecure_port('[::]:9090')
    await server.start()
    logger.info("--Started GRPC Server--")
    await server.wait_for_termination()
    
if __name__ == "__main__":
    run(serve())