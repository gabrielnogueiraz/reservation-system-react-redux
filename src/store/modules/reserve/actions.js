export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST",
    id,
  };
}

export function addReserveSuccess(id) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    id,
  };
}

export function removeReseve(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: "UPDATE_RESERVE_REQUEST",
    id,
    amount,
  };
}

export function updateAmountSuccesss(id, amount) {
  return {
    type: "UPDATE_RESERVE_SUCCESS",
    id,
    amount,
  };
}
