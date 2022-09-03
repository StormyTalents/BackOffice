import actionCreator from "../../../../utils/actionCreator";

const MachineActionTypes = ["VIEW_MACHINE", "CLEAR_VIEW_MACHINE"];

export const { types, actions } = actionCreator(MachineActionTypes);
