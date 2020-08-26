#!/usr/bin/env python3
import argparse as ap
import csv
import os.path as ospath
import sys

DESCRIPTION = "Turn a csv file into json"
EPILOG = "Happy experimenting!"

def process_file(filename):
    '''A name of a file, the file will be opened and proccessed as an dialect of
    a spreadsheet program'''
    with open(filename, 'r') as csvfile:
        dialect = csv.Sniffer(csvfile, 1024)
        csv.reader(csvfile, dialect=dialect)
        for row in reader:

def parse_cmd():
    parser = ap.ArgumentParser(
            ospath.basename(sys.argv[0]),
            description=DESCRIPTION,
            epilog=EPILOG
            )
    file_help = "A csv file that should be turned into a json file"
    parser.add_argument("file", nargs=1, help=file_help)
    args = parser.parse_args()
    return args
    

def main():
    '''Runs the actual program'''
    arguments = parse_cmd()
    process_file(args.file)

if __name__ == "__main__":
    main()
