// export const Reducer = (state, action) => {
//     if (action.type === "GET_TOTAL") {
//         let { totalQty, totalPrice } = state.item.reduce(
//             (accum, curVal) => {
//                 let {price, quantity} = curVal;

//                 let updateTotalAmount = price * quantity;
//                 accum.totalPrice += updateTotalAmount;

//                 accum.totalPrice +=quantity;
//                 return accum;
//             },
//             {
//                 totalPrice : 0,
//                 totalQty :0,
//             }
//         );
//         return {...state , totalPrice ,totalQty};
//     }
//     return state;
// }
