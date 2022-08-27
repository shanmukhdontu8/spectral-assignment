from read_csv import read_csv_file
def test_grpc_csv_reading():
    csv_data = read_csv_file('meter_data_csv/sample.csv')
    x = list(csv_data)
    assert x == [['Shanmukh', '26'],['Charli', '56'],['Licious', '1']]
    