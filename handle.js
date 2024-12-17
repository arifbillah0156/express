const handle = (req, res) => {
  console.log(req.baseUrl);

  res.send(req.app.locals.title);
};

module.exports = handle;
