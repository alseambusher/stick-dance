from stickman import Stickman
import os
import time
import wave
import numpy as np
import sys
import music
import config

_file = wave.open(sys.argv[1],'r')
#sz = 44100 # Read and process 1 second at a time.
da = np.fromstring(_file.readframes(config.rate), dtype=np.int16)
left, right = da[0::2], da[1::2]
print music.Sparks(left[:100])
#for i in right:
    #print i
_file.close()
"""
while True:
    Stickman(1,1,1).show()
    time.sleep(0.1)
    Stickman(1,2,1).show()
    time.sleep(0.1)
    """

