'use strict';

const express = require('express');
const expensesController = require('../controllers/expenses.controller');
const expensesRouter = express.Router();

expensesRouter.get('/', expensesController.get);
expensesRouter.post('/', expensesController.create);
expensesRouter.get('/:id', expensesController.getOne);
expensesRouter.delete('/:id', expensesController.remove);
expensesRouter.patch('/:id', expensesController.update);

module.exports = {
  expensesRouter,
};
