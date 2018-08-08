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
        url: "/clients.json",
        dataType: "json",
        method: "GET"
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
