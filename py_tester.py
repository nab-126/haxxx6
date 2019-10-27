#- python random output generator

import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
	outputs = ['hello','how are you', 'what major are you?', 'any more questions?', 'goodbye']
	my_resp = np.random.choice(outputs, size=1)

	print(muy_resp)

#start process
if __name__ == '__main__':
    main()