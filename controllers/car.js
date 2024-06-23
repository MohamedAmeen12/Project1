import Car from "../models/Car.js";
import mongoose from "mongoose";

const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCarById = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const {
    type,
    model,
    yearOfManifacture,
    price,
    hoursePower,
    cylinders,
    transmission,
    cc,
    color,
    airbags,
    EBD,
    ABS,
    length,
    width,
    height,
    wheelbase,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No car with id: ${id}`);

  const updatedCar = {
    type,
    model,
    yearOfManifacture,
    price,
    hoursePower,
    cylinders,
    transmission,
    cc,
    color,
    airbags,
    EBD,
    ABS,
    length,
    width,
    height,
    wheelbase,
    _id: id,
  };

  await Car.findByIdAndUpdate(id, updatedCar, { new: true });

  res.json(updatedCar);
};

const deleteCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No car with id: ${id}`);

  await Car.findByIdAndDelete(id);

  res.json({ message: "Car deleted successfully" });
};

export { createCar, getCars, getCarById, updateCar, deleteCar };
