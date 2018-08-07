import $ from "jquery";
import { setDetail } from "./detail";

export const setClients = clients => ({
  type: "SET_CLIENTS",
  clients
});

export const startSetClients = () => {
  return dispatch => {
    return $
      .ajax({
        type: "GET",
        dataType: "json",
        url: "/clients.json"
      })
      .done(data => {
        dispatch(setClients(data));
        dispatch(setDetail(data[0]));
      })
      .fail(err => {
        console.log("error", err);
      });
  };
};
