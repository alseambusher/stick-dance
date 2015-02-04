import config
import common
import os

class Stickman:
    def __init__(self,head,body,legs):
        self.head = self.getHead(head).readlines()
        self.body = self.getBody(body).readlines()
        self.legs = self.getLegs(legs).readlines()
        # max width
        self.Mh = max([len(line) for line in self.head])
        self.Mb = max([len(line) for line in self.body])
        self.Ml = max([len(line) for line in self.legs])
        self.M= max(self.Mh,self.Mb,self.Ml)

    def getShape(self,obj, _type):
        return open(config.shapes+str(obj)+"."+_type)

    def getHead(self,obj):
        return self.getShape(obj,"head")

    def getBody(self,obj):
        return self.getShape(obj,"body")

    def getLegs(self,obj):
        return self.getShape(obj,"legs")

    def show(self, move=0):
        os.system('cls' if os.name=='nt' else 'clear')
        for line in self.head:
            print " "*(config.padding+move+self.M/2-self.Mh/2-1)+line[:-1]
        for line in self.body:
            print " "*(config.padding+move+self.M/2-self.Mb/2-1)+line[:-1]
        for line in self.legs:
            print " "*(config.padding+move+self.M/2-self.Ml/2-1)+line[:-1]

