from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__, static_url_path="/static")


@app.route("/")
def index():
    """Index page where user can make new doc."""
    return render_template("index.html")


@app.route("/document/<name>")
def document(name):
    """Page redirected to from index page."""
    file_path = "files/" + name + ".txt"
    if Path(file_path).is_file():
        file = open(file_path, "r")
        return render_template("document.html", name=name,
                               content=file.read())
    else:
        file = open(file_path, "w+")
        return render_template("document.html", name=name)


if __name__ == "__main__":
    app.run()
