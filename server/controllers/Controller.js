const getReq = async (req, res) => {
  res.status(200).json({ express: "get request" });
};

const postReq = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "text is required" });
  } else {
    console.log(req.body);
    res.status(200).json({ express: `post request with body ${req.body}` });
  }
};

const putReq = async (req, res) => {
  res.status(200).json({ express: `Put req with id = ${req.params.id}` });
};

const deleteReq = async (req, res) => {
  res.status(200).json({ express: `Delete req with id = ${req.params.id}` });
};

module.exports = { getReq, postReq, putReq, deleteReq };
