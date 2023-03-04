const getReq = (req, res) => {
  res.status(200).json({ express: "get request" });
};

const postReq = (req, res) => {
  res.status(200).json({ express: "post request" });
};

const putReq = (req, res) => {
  res.status(200).json({ express: `Put req with id = ${req.params.id}` });
};

const deleteReq = (req, res) => {
  res.status(200).json({ express: `Delete req with id = ${req.params.id}` });
};

module.exports = { getReq, postReq, putReq, deleteReq };
