export const validationRules = {
  title: {
    required: "Title is required",
    minLength: {
      value: 5,
      message: "Title must be at least 5 characters long",
    },
  },
  projectCode: {
    required: "Project code is required",
    minLength: {
      value: 2,
      message: "Project code must be at least 2 characters long",
    },
  },
  description: {
    required: "Description is required",
    minLength: {
      value: 15,
      message: "Description must be at least 15 characters long",
    },
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
