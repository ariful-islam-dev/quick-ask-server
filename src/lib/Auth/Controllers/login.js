const login = async(req, res, next) => {
    res.status(200).json({
      message: "Login Successfully",
    });
  };

export default login;