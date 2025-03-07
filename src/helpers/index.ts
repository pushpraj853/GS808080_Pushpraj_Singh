import toast from "react-hot-toast";

export const successToast = (message: string, duration: number = 4000) => {
  toast["success"](message, { duration });
};

export const errorToast = (message: string, duration: number = 4000) => {
  toast["error"](message, { duration });
};
