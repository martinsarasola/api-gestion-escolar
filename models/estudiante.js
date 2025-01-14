const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const estudiantesSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cursos: [
    {
      type: String,
      enum: ["Matemática", "Historia", "Ciencias", "Arte"],
      required: true,
    },
  ],
});

const EstudiantesModel = mongoose.model("estudiantes", estudiantesSchema);

module.exports = EstudiantesModel;
