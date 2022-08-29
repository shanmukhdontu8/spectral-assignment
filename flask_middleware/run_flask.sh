#!/bin/bash
virtualenv -p 3.9.1 test
source $PWD/test/bin/activate
pip install -r 'requirements.txt'
python app.py
