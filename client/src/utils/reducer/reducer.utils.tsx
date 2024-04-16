//helper functions to turn params to one obj

export const createAction = (type:string, payload:any) => {
    return {type, payload};
}