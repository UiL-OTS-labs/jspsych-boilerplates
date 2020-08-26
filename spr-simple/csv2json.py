#!/usr/bin/env python3
import argparse as ap
import csv
import os.path as ospath
import sys
import json

DESCRIPTION = "Turn a csv file into json"
EPILOG = "Happy experimenting!"
JSONSUF = ".json"

def process_file(filename):
    '''A name of a file, the file will be opened and proccessed as an dialect of
    a spreadsheet program'''
    with open(filename, 'r') as csvfile:
        dialect = csv.Sniffer().sniff(csvfile.read(1024))
        csvfile.seek(0)
        reader = csv.DictReader(csvfile, dialect=dialect)
        items = [item for item in reader]
        return json.dumps(items, indent=4)

def parse_cmd():
    parser = ap.ArgumentParser(
            ospath.basename(sys.argv[0]),
            description=DESCRIPTION,
            epilog=EPILOG
            )
    file_help = "A csv file that should be turned into a json file"
    parser.add_argument("file", help=file_help)
    args = parser.parse_args()
    return args

def create_output(filename, jsonstr):
    "Creates output for infile" 
    overwritemsg = "'{}' exists, do you want to overwrite it [y/n]".format(
            filename
            )
    if ospath.exists(filename):
        c = None
        while True:
            c = input(overwritemsg)
            if c in ["y", "n"]:
                break
        if c == "n":
            return

    with open (filename, 'w') as output:
        output.write(jsonstr)

def main():
    '''Runs the actual program'''
    arguments = parse_cmd()
    filename = arguments.file
    jsonstr = process_file(filename)
    name, _ = ospath.splitext(filename)
    create_output(name + JSONSUF, jsonstr)

if __name__ == "__main__":
    main()
