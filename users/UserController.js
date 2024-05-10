exports.getAllUsers = (req, res) => {
    return res.status(200).json({
        data: [
            {
                "firstName": "Marco",
                "lastName": "Silva",
                "email": "marcos.henrique@toptal.com"
            },
            {
                "firstName": "Paulo",
                "lastName": "Silva",
                "email": "marcos.henrique2@toptal.com"
            }
        ],
    });
}
  