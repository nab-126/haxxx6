import re
from bs4 import BeautifulSoup
import requests

def findClass(classname):
    classname = classname.split(" ")
    url = "https://classes.berkeley.edu/content/2020-spring-{}-{}-001-lec-001".format(classname[0], classname[1])
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    help = str(soup)
    return help

def findDays(classname):
    answer = re.findall('"meetsDays.+?,', findClass(classname))[0].split(":")
    return answer[1][1:-2]

def findStartTime(classname):
    return ":".join(re.findall('"startTime.+?,', findClass(classname))[0].split(":")[1:])[1:-2]

def findEndTime(classname):
    return ":".join(re.findall('"endTime.+?,', findClass(classname))[0].split(":")[1:])[1:-2]


def findInstructor(classname):
    return re.findall('"formattedName.+?,', findClass(classname))[0].split(":")[1][1:-2]

def findLocation(classname):
    return re.findall('"location.+?,', findClass(classname))[0].split(":")[2][1:-2]

#meetdays = re.findall('"meetsDays.+?,', help)[0]
#startTime = re.findall('"startTime.+?,', help)[0]
#instructor = re.findall('"formattedName.+?,', help)[0]
#loc = re.findall('"location.+?}', help)[0]



#print(findDays("EECS 70"))
#print(findTime("EECS 70"))

#print(findInstructor("EECS 70"))

#print(startTime)
#print(instructor)
#print(loc)
