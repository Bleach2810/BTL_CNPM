const Printer = require("../models/printerModules");
exports.getAllPrinter = async (req, res) => {
  try {
    const allPrinter = await Printer.find();
    res.status(200).json({
      status: "success",
      data: {
        allPrinter,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getPrinter = async (req, res) => {
  try {
    const printer = await Printer.findByID(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        printer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createPrinter = async (req, res) => {
  try {
    const newPrinter = await Printer.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newPrinter,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePrinter = async (req, res) => {
  try {
    const updatePrinter = await Printer.findByIDAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updatePrinter,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deletePrinter = async (req, res) => {
  try {
    await Printer.findByIDAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
