# coding=utf-8
from pylab import plot, show, title, xlabel, ylabel, subplot, savefig
from scipy import fft, arange, ifft
from numpy import sin, linspace, pi
from scipy.io.wavfile import read,write
import numpy as np
import config

def Sparks(values):
    sparks = np.fromstring('▁▂▃▄▅▆▇█', dtype='S3')
    #values = np.array([float(v) for v in ' '.join(sys.argv[1:]).replace(',', ' ').split()])
    if np.unique(values).size != 1:
        values -= values.min()

    m = values.max() or 1
    values /= m

    return sparks[np.round(values * (sparks.size - 1)).astype(int)].tostring()

def plotWave(_file):
    rate,data=read(_file)
    y=data[:,1]
    lungime=len(y)
    timp=len(y)/44100.
    t=linspace(0,timp,len(y))

    subplot(2,1,1)
    plot(t,y)
    xlabel('Time')
    ylabel('Amplitude')

    subplot(2,1,2)
    n = len(y) # lungime semnal
    k = arange(n)
    T = n/config.rate
    frq = k/T # two sides frequency range
    frq = frq[range(n/2)] # one side frequency range

    Y = fft(y)/n # fft computing and normalization
    Y = Y[range(n/2)]

    plot(frq,abs(Y),'r') # plotting the spectrum
    xlabel('Freq (Hz)')
    ylabel('|Y(freq)|')

    show()
