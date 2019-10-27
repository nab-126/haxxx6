from flask import Flask, render_template      

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("main.html")
    

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))

    
if __name__ == "__main__":
    app.run(debug=True, port=8000, host='127.0.0.1')



def respond():
    #get our data somehow

    #create a numpy array
    outputs = ['hello','how are you', 'what major are you?', 'any more questions?', 'goodbye']
    my_resp = np.random.choice(outputs, size=1)

    return my_resp



