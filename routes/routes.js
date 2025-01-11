const express = require("express");
const router = express.Router();
const Estudiantes = require("../models/estudiantesmodel");

// Obtener estudiantes
router.get("/estudiantes", async (req, res) => {
  try {
    const { curso } = req.query; // Si se añade un query de curso, se busca a los estudiantes que estén inscriptos en ese curso

    if (!curso) {
      // Si no se añade un query, se obtienen todos los alumnos
      const estudiantes = await Estudiantes.find();
      res.status(200).json({
        success: true,
        message: "Estudiantes obtenido con éxito",
        data: estudiantes,
      });
    } else {
      const filtro = curso ? { cursos: { $in: [curso] } } : {};

      const estudiantesFiltrados = await Estudiantes.find(filtro);

      res.status(200).json({
        success: true,
        message: "Estudiantes obtenido con éxito",
        data: estudiantesFiltrados,
      });
    }
  } catch (error) {
    console.error("Hubo un error al obtener estudiantes: ", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error en el servidor.",
      error: error.message,
    });
  }
});

// Obtener un estudiante por ID
router.get("/estudiantes/:id", async (req, res) => {
  try {
    const idEstudiante = req.params.id;
    const estudiante = await Estudiantes.findById(idEstudiante);

    if (!estudiante) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontró al estudiante." });
    }

    res.status(200).json({
      success: true,
      message: "Estudiante obtenido con éxito.",
      data: estudiante,
    });
  } catch (error) {
    console.error("Hubo un error al obtener alumnos: ", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error en el servidor.",
      error: error.message,
    });
  }
});

// Crear un nuevo estudiante
router.post("/estudiantes", async (req, res) => {
  try {
    const { nombre, apellido, email, cursos } = req.body;

    if (!nombre || !apellido || !email || !cursos) {
      return res.status(400).json({
        success: false,
        message: "Todos los campos son obligatorios.",
      });
    }

    const nuevoEstudiante = await Estudiantes.create(req.body);
    res.status(201).json({
      success: true,
      message: "Estudiante creado con éxito.",
      data: nuevoEstudiante,
    });
  } catch (error) {
    console.error("Hubo un error al crear el estudiante: ", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error en el servidor.",
      error: error.message,
    });
  }
});

// Actualizar los datos de un estudiante por ID
router.put("/estudiantes/:id", async (req, res) => {
  try {
    const idEstudiante = req.params.id;
    const estudianteActualizado = await Estudiantes.findByIdAndUpdate(
      idEstudiante,
      req.body,
      { new: true, runValidators: true }
    );

    if (!estudianteActualizado) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontró al estudiante." });
    }

    res.status(200).json({
      success: true,
      message: "Estudiante actualizado con éxito.",
      data: estudianteActualizado,
    });
  } catch (error) {
    console.error("Hubo un error al actualizar el estudiante: ", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error en el servidor.",
      error: error.message,
    });
  }
});

// Eliminar un estudiante por ID
router.delete("/estudiantes/:id", async (req, res) => {
  try {
    const idEstudiante = req.params.id;
    const estudianteEliminado = await Estudiantes.findByIdAndDelete(
      idEstudiante
    );

    if (!estudianteEliminado) {
      return res
        .status(404)
        .json({ success: false, message: "No se encontró al estudiante." });
    }

    res.status(200).json({
      success: true,
      message: "Estudiante eliminado.",
      data: estudianteEliminado,
    });
  } catch (error) {
    console.error("Hubo un error al eliminar el estudiante: ", error);
    res.status(500).json({
      success: false,
      message: "Hubo un error en el servidor",
      error: error.message,
    });
  }
});

module.exports = router;
