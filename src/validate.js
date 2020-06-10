export function validateName(name) { // if it fails, return a message
  if (name.length === 0) {
    return 'name is required';
  } else if (name.length < 3) {
    return 'name must be greater than 3 characters'
  } else if (name.match(/\s/g)) { // if there's any white space
    return 'there shouldn\'t be any space(s) in your username';
  }
}


export function validatePassword(password) {
  if (password.length === 0) {
    return 'password is required';
  } else if (password.length < 6 || password.length > 72) {
    return 'password should be between 6 and 72 characters';
  } else if (!password.match(/[0-9]/)) {
    return 'password must contain at least one number';
  }
}

export function validateRepeatPassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    return `passwords do not match`;
  }
}