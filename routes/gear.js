var express = require('express');
var router = express.Router();
var Gear = require('../models').Gear;


/* GET gear items. */
router.get('/', function(req, res) {
  Gear.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
  .then( function(gear) {
    return res.render('gear', { gear: gear });
  })
});

/* POST gear items */
router.post('/', function(req, res) {
  var item = req.body.item;
  var description = req.body.description;
  var price = req.body.price;
  var weight = req.body.weight;
  Gear.create({ item: item, 
                description: description, 
                weight: weight,
                price: price
              })  
  .then( function() {
    res.redirect('/gear');
  });
});

/* DELETE gear items */
router.delete('/:id', function(req, res) {
  Gear.findById(req.params.id)
    .then( function(gear) {
      gear.destroy()
    })
    .then( function() {
      return res.redirect('/gear');
  });
});

/* EDIT gear items*/
router.get('/:id/edit', function(req, res) {
  Gear.findById(req.params.id)
    .then( function(gear) {
      return res.render('edit', { gear: gear });
  });
});

router.put('/:id', function(req, res) {
  Gear.update(
    { item: req.body.item,
      description: req.body.description,
      weight: req.body.weight,
      price: req.body.price },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/gear');
  })
});

module.exports = router;