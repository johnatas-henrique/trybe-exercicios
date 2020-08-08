const express = require('express');
const rescue = require('express-rescue');
const { Book } = require('../models');
const books = express.Router();

books.get('/', rescue(async (_req, res) => {
  const books = await Book.findAll();
  return res.status(200).json(books);
}));

books.get('/:id', rescue(async (req, res) => {
  const books = await Book.findByPk(req.params.id);
  if (!books) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(books);
}));

books.post('/', rescue(async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const books = await Book.create({ title, author, pageQuantity });
  return res.status(201).json(books);
}));

books.post('/:id', rescue(async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const books = await Book.update({ title, author, pageQuantity }, { where: { id: id } });
  const result = await Book.findByPk(id);
  return res.status(200).json(result);
}));

books.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const books = await Book.destroy({ where: {id: id} });
  return res.status(204).end();
}));

module.exports = books;
