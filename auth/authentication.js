const validUsers = [
  {
    username: "apiuser",
    password: "d66fc6fa-8ace-46f8-b9bb-d9750ba60b68",
    role: "user",
  },
  { username: "admin", password: "admin123", role: "admin" },
];

const authMiddleware = (req, res, next) => {
  // Get auth credentials from headers
  const username = req.headers.username;
  const password = req.headers.password;

  // Check if credentials are provided
  if (!username || !password) {
    return res.status(401).json({
      status: "error",
      message:
        "Authentication required. Please provide username and password headers.",
    });
  }

  // Find user in database
  const user = validUsers.find(
    (u) => u.username === username && u.password === password
  );

  // If user not found or credentials don't match
  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "Invalid credentials",
    });
  }

  // Add user info to request object for use in route handlers
  req.user = {
    username: user.username,
    role: user.role,
  };

  // Proceed to the route handler
  next();
};

module.exports = authMiddleware;
