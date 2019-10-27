import Chatbot.oskichat as bot
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("main.html")
    

@app.route("/post", methods=['POST'])
def post():
    userText = request.form.get('msg')
    botresp = bot.respond(userText)
    return str(botresp)

    
if __name__ == "__main__":
    app.run(debug=True, port=8000, host='127.0.0.1')

