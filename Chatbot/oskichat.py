import numpy
import tensorflow
import tflearn

import random
import json
import pickle

import webscraper

import nltk 
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

f= open("classes.txt", "r")
contents =f.read()
contents.rstrip()
contents = contents.replace("(", "").replace('\n', ' ')
classes = contents.split(") ")
classnames = []
classabreviations = []
for item in classes:
	classabreviations.append(item.split()[-1])
	classnames.append(" ".join(item.split()[:-1]))

with open("intents.json", encoding="utf8") as file:
	data = json.load(file)

try:
	with open("data.pkl", "rb") as f:
		words, labels, training, output = pickle.load(f)
except:
	words = []
	labels = []
	docs_x = []
	docs_y = []

	for intent in data["intents"]:
		for pattern in intent["patterns"]:
			wrds = nltk.word_tokenize(pattern)
			words.extend(wrds)
			docs_x.append(wrds)
			docs_y.append(intent["tag"])

		if intent["tag"] not in labels:
			labels.append(intent["tag"])

	words = [stemmer.stem(w.lower()) for w in words if w != "?"]
	words = sorted(list(set(words)))
	labels = sorted(labels)
	training = []
	output = []
	out_empty = [0 for _ in range(len(labels))]

	for x, doc in enumerate(docs_x):
		bag = []
		wrds = [stemmer.stem(w) for w in doc]

		for w in words:
			if w in wrds:
				bag.append(1)
			else:
				bag.append(0)

		output_row = out_empty[:]
		output_row[labels.index(docs_y[x])] = 1
		training.append(bag)
		output.append(output_row)

	training = numpy.array(training)
	output = numpy.array(output)
	with open("data.pkl", "wb") as f:
		pickle.dump((words, labels, training, output), f)
	
tensorflow.reset_default_graph()
net = tflearn.input_data(shape=[None, len(training[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(output[0]), activation="softmax")
net = tflearn.regression(net)
model = tflearn.DNN(net)

try:
	model.load("model.tflearn")
except:
	model = tflearn.DNN(net)
	model.fit(training, output, n_epoch=1000, batch_size=8, show_metric=True)
	model.save("model.tflearn")

def bag_of_words(s, words):
	bag = [0 for _ in range(len(words))]

	s_words = nltk.word_tokenize(s)
	s_words = [stemmer.stem(word.lower()) for word in s_words]

	for se in s_words:
		for i, w in enumerate(words):
			if w == se:
				bag[i] = (1)
	return numpy.array(bag)


def respond(inp):
	found = 0
	ans = ""
	inp = inp.upper()
	for i in classabreviations:
		x = inp.split()
		if i in x:
			clas = i.lower() + " " + x[x.index(i) + 1]
			count = 0
			if "TIME" in x or "WHEN" in x or "DAYS" in x or "OFTEN" in x:
				ans += webscraper.findDays(clas) + ": "
				ans += webscraper.findStartTime(clas) + "-"
				ans += webscraper.findEndTime(clas) + "\n"
				count += 1
			if "INSTR" in x or "INSTRUCTOR" in x or "PROF" in x or "TEACHER" in x or "PROFESSOR" in x:
				ans += "Class is taught by " + webscraper.findInstructor(clas) + "\n"
				count += 1
			if "LOCATION" in x or "PLACE" in x or "BUILDING" in x or "WHERE" in x or "ROOM" in x:
				ans += "Class is in " + webscraper.findLocation(clas) + "\n"
				count += 1
			if count == 0:
				ans += webscraper.findDays(clas) + ": "
				ans += webscraper.findStartTime(clas) + "-"
				ans += webscraper.findEndTime(clas) + "\n\n"
				ans += "Class is taught by " + webscraper.findInstructor(clas) + "\n\n"
				ans += "Class is in " + webscraper.findLocation(clas) + "\n\n"
			found = 1
	if not found:
		results = model.predict([bag_of_words(inp, words)])
		results_index = numpy.argmax(results)
		tag = labels[results_index]

		for tg in data["intents"]:
			if tg['tag'] == tag:
				responses = tg['responses']
		ans = random.choice(responses)

	return ans


def chat():
	print("Start talking with the bot (type quit to stop)!")
	while True:
		inp = input("You: ").upper()
		if inp.lower() == "quit":
			break
		print(inp)
		ans = respond(inp)
		print(ans)


print(respond("math 53"))
