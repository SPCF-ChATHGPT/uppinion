export const validationRules = {
  title: {
    required: "Title is required",
    minLength: {
      value: 5,
      message: "Title must be at least 5 characters long",
    },
  },

  gender: {
    required: "Gender is required",
  },

  address: {
    required: "Address is required",
    minLength: {
      value: 10,
      message: "Address must be at least 15 characters long",
    },
  },

  age: {
    required: "Age is required"
  },

  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
  },

  username: {
    required: "Username is required",
    minLength: {
      value: 2,
      message: "Username must be at least 2 characters long",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Email is invalid",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
  },
};
