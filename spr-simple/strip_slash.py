#!/usr/bin/env python3

STRIPABC = "#"
SPLITABC = "/"

def stripstring(instr, stripstr=STRIPABC):
    return filter(lambda x: x not in stripstr, instr)

def process(filename):
    instr = ""
    with open (filename, 'r') as infile:
        while True:
            part = infile.read(1024)
            if not part:
                break
            instr += part
    outstr = instr.replace('/', ' ')
    outstr = outstr.replace('#', '')
    if outstr != instr:
        with open(filename, 'w') as outfile:
            outfile.write(outstr)

if __name__ == "__main__":
    import sys
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
            'in_output',
            type=str,
            help='name of the file to be stripped of # and /')
    args = parser.parse_args()
    process(args.in_output)

