from tkinter.filedialog import test
import asyncio
import grpc
from protos.meter_pb2 import MeterRequest
from protos.meter_pb2_grpc import MeterStub

async def testit():
    print("tersting")
    async with grpc.aio.insecure_channel('localhost:9090') as channel:
        stub = MeterStub(channel)
        async for resp in  stub.ReadMeter(MeterRequest()):
            print('resp',resp)
    
if __name__ == "__main__":
    asyncio.run(testit())