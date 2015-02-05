from stickman import Stickman
import os
import time
import sys
import config
import music

music.plotWave(sys.argv[1])
while True:
    Stickman(1,1,1).show()
    time.sleep(0.1)
    Stickman(1,2,1).show()
    time.sleep(0.1)
