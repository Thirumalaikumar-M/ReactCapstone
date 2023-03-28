import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../utils/apiMockup";
import { useFormContext } from "../store/FormContext";

const initialState = {
  name: "",
  email: "",
  date: "",
  time: "",
  numberOfGuests: 1,
  tablePreference: "",
  occasion: "",
  message: "",
};

const ACTION_TYPES = {
  NAME: 0,
  EMAIL: 1,
  DATE: 2,
  TIME: 3,
  GUESTS: 4,
  TABLE: 5,
  OCCASION: 6,
  MESSAGE: 7,
};

function formReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACTION_TYPES.DATE:
      return {
        ...state,
        date: action.payload,
      };
    case ACTION_TYPES.TIME:
      return {
        ...state,
        time: action.payload,
      };
    case ACTION_TYPES.GUESTS:
      return {
        ...state,
        numberOfGuests: action.payload,
      };
    case ACTION_TYPES.TABLE:
      return {
        ...state,
        tablePreference: action.payload,
      };
    case ACTION_TYPES.OCCASION:
      return {
        ...state,
        occasion: action.payload,
      };
    case ACTION_TYPES.MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [timeSlots, setTimeslots] = useState(["Choose date first"]);
  const [isFormValid, setFormValid] = useState(false);
  const formContext = useFormContext();

  useEffect(() => {
    if (
      form.email.includes("@") &&
      form.email.includes(".") &&
      form.email.trim().length > 5 &&
      form.name.trim().length >= 3 &&
      form.date &&
      form.time &&
      form.numberOfGuests
    ) {
      setFormValid(true);
    }
  }, [form]);

  const changeNameHandler = (e) => {
    dispatch({ type: ACTION_TYPES.NAME, payload: e.target.value });
  };

  const changeEmailHandler = (e) => {
    dispatch({ type: ACTION_TYPES.EMAIL, payload: e.target.value });
  };

  const changeDateHandler = (e) => {
    dispatch({ type: ACTION_TYPES.DATE, payload: e.target.value });
    setTimeslots(fetchAPI(new Date(e.target.value)));
  };

  const changeTimeHandler = (e) => {
    dispatch({ type: ACTION_TYPES.TIME, payload: e.target.value });
  };

  const changeGuestsHandler = (e) => {
    dispatch({ type: ACTION_TYPES.GUESTS, payload: e.target.value });
  };

  const changeTableHandler = (e) => {
    dispatch({ type: ACTION_TYPES.TABLE, payload: e.target.value });
  };

  const changeOccasionHandler = (e) => {
    dispatch({ type: ACTION_TYPES.OCCASION, payload: e.target.value });
  };

  const changeMessageHandler = (e) => {
    dispatch({ type: ACTION_TYPES.MESSAGE, payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let response;

    if (isFormValid) {
      response = submitAPI(form);
      formContext.setForm(form);
    }
    return response ? true : false;
  };

  return {
    form,
    timeSlots,
    isFormValid,
    changeNameHandler,
    changeEmailHandler,
    changeDateHandler,
    changeTimeHandler,
    changeGuestsHandler,
    changeTableHandler,
    changeOccasionHandler,
    changeMessageHandler,
    submitHandler,
  };
};

export default useForm;