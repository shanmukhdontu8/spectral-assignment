from datetime import datetime
from csv import reader
from protos.meter_pb2_grpc import MeterServicer
from protos.meter_pb2 import MeterReading
from datetime import datetime

_CSV_FILE = 'meter_data_csv/meter.csv'
class Meter(MeterServicer):
    """read Meter data from RPC streaming
    """
    async def ReadMeter(self, request, context) -> MeterReading:
        for row in read_csv_file(_CSV_FILE):
            row_timestamp = int(datetime.strptime(row[0],'%Y-%m-%d %H:%M:%S').timestamp())
            row_value = float(row[1])
            yield MeterReading(time=row_timestamp, meter_reading=row_value)
       

def read_csv_file(csv):
    """read CSV file
    """
    with open(csv, 'r') as read_obj:
        meter_usage_csv = reader(read_obj)
        # Skipping headers
        next(meter_usage_csv)
        for data in meter_usage_csv:
            yield data
    
