#!/usr/bin/env python
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('-i', type=argparse.FileType('r'))
parser.add_argument('-o')
args = parser.parse_args()

data = np.loadtxt(args.i)
plt.plot(data[:, 0], data[:, 1])
# ^^^ this is gonna first column from data as x, second as y.
plt.savefig(args.o)

# SYSTEM INSTALLS NOTES ~Sahil:
# python -m pip install -U pip
# python -m pip install -U matplotlib
#
#
# pip install argparse
