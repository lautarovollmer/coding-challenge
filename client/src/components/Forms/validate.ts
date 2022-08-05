export const validate = (inputs: any) => {
  let errors = {};
  if (!inputs.name){
    // @ts-ignore: Unreachable code error
    errors.name = "Original title is required";
  } else if (inputs?.name.indexOf(" ") === 0) {
    // @ts-ignore: Unreachable code error
    errors.name = "No empty spaces allowed";
  }

  if (!inputs.image) {
    // @ts-ignore: Unreachable code error
    errors.image = "Image URL is required";
  } else if (
    !/[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi.test(
      inputs?.image
    )
  ) {
    // @ts-ignore: Unreachable code error
    errors.image = "Image Url is not valid";
  }

  if (!inputs.price) {
    // @ts-ignore: Unreachable code error
    errors.price = "Price is required";
  }

  if (!inputs.brand) {
    // @ts-ignore: Unreachable code error
    errors.brand = "Brand is required";
  }

  if (!inputs.description) {
    // @ts-ignore: Unreachable code error
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length < 1) {
    // @ts-ignore: Unreachable code error
    errors.isValid = true;
  } else {
    // @ts-ignore: Unreachable code error
    errors.isValid = false;
  }

  return errors;
};

