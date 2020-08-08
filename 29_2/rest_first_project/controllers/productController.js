const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', (_req, res) => {
  const products = new ProductModel().getAll();
  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const product = new ProductModel().getById(req.params.id);
  if (!product) res.status(404).json({ message: 'Produto não encontrado' });
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = new ProductModel(name, brand);
    newProduct.add();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(500).json({
      message: 'Algo deu errado no POST',
    });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const products = new ProductModel().delete(req.params.id);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({
      message: 'Algo deu errado no DELETE',
    });
  }
});

router.put('/:id', (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = new ProductModel(name, brand).addOrUpdate(req.params.id);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({
      message: 'Algo deu errado no PUT',
    });
  }
});

module.exports = router;
