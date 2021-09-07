import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: "EmployeeState",
    initialState: {
        employees: [],
        employee: null,
        errors: null

    },
    reducers: {
        LoadEmployees: (state, action) => {
            const {employees} = action.payload
            state.employees = employees
        },
        AddEmployee: (state, action) => {
            const {employee} = action.payload;
          //Todo

        }

    }
})

export const {
    LoadEmployees,
    AddEmployee

} = slice.actions;

export const _LoadEmployees = (employee: any) => (dispatch: any) => {
    try {

        dispatch(LoadEmployees({employee: employee}))


    } catch (e) {


    }


}

export const _AddEmployee = () => {
}


export default slice.reducer;