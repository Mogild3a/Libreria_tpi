from flask import Flask, jsonify, request
from faker import Faker
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app) 

fake = Faker()

libri = []

def genera_libri(n=20):
    generi = ["Fantascienza", "Giallo", "Romanzo", "Horror", "Azione", "Thriller", "Avventura"]
    for _ in range(n):
        libro = {
            "id": fake.uuid4(),
            "titolo": fake.sentence(nb_words=3),
            "autore": fake.name(),
            "anno": random.randint(0, 2026),
            "genere": random.choice(generi)
        }
        libri.append(libro)

genera_libri()

@app.route("/api/libri", methods=["GET"])
def get_libri():
    return jsonify(libri)

@app.route("/api/libri", methods=["POST"])
def add_libro():
    data = request.json
 
    nuovo_libro = {
        "id": fake.uuid4(),
        "titolo": data.get("titolo"),
        "autore": data.get("autore"),
        "anno": data.get("anno"),
        "genere": data.get("genere")
    }
 
    libri.append(nuovo_libro)
 
    return jsonify(nuovo_libro)

@app.route("/api/libri/<id>", methods=["DELETE"])
def delete_libro(id):
    for libro in libri:
        if libro["id"] == id:
            libri.remove(libro)
            return jsonify({"message": "Libro eliminato"})

@app.route("/api/libri", methods=["DELETE"])
def delete_all_libri():
    libri.clear()
    return jsonify({"message": "Tutti i libri eliminati"})
 
    
if __name__ == "__main__":
    app.run(debug=True)
