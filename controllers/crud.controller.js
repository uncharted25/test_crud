const Crud = require('../models/crud.model');

//Simple version, without validation or sanitation
exports.crud_create = function (req, res) {
  let crud = new crud(
    {
        name: req.body.name,
        type: req.body.type,
        age:  req.body.age,
        issue_date:  req.body.issue_date
        
    }
);
crud.save(function (err) {
  if (err) {
      return next(err);
  }
  res.send('Vaccine Created successfully')
})
};