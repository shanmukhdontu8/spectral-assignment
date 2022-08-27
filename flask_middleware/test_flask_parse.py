from app import meter_readings_to_dict
from protos.meter_pb2 import MeterReading

def test_readings_to_dict_Nans():
    meter_reading = MeterReading(time=1234,meter_reading=float('nan'))
    print(meter_reading)
    to_dict = meter_readings_to_dict(meter_reading)
    assert to_dict == {'meter_reading': None, 'time': 1234}
    
def test_readings_to_dict_float():
    meter_reading = MeterReading(time=1234,meter_reading=20)
    print(meter_reading)
    to_dict = meter_readings_to_dict(meter_reading)
    assert to_dict == {'meter_reading': 20, 'time': 1234}
    
    