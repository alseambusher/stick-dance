# coding=utf-8
import numpy as np

def Sparks(values):
    sparks = np.fromstring('▁▂▃▄▅▆▇█', dtype='S3')
    #values = np.array([float(v) for v in ' '.join(sys.argv[1:]).replace(',', ' ').split()])
    if np.unique(values).size != 1:
        values -= values.min()

    m = values.max() or 1
    values /= m

    return sparks[np.round(values * (sparks.size - 1)).astype(int)].tostring()
