import React from 'react'
import '../styles/App.css';
import Board from './Board'
const App = () => {

  return (
    <div id="main">
      <h1>2048</h1>
      <Board GridSize={5} />
    </div>
  )
}


export default App;


                    // let oldGrid = blueBoard;
                    // let newArray = cloneDeep(blueBoard);

                    // console.table(newArray);
                    // for(let i=0;i<GridSize;i++){
                    //     let b = newArray[i];
                    //     let slow = 0;
                    //     let fast = 1;
                    //    while(slow<GridSize){
                    //         if(fast===GridSize){
                    //             fast = slow+1;
                    //             slow++;
                    //             continue;
                    //         }
                    //         if(b[slow]===0 && b[fast]===0){
                    //             fast++;
                    //         }else if(b[slow]===0 && b[fast]!==0){
                    //             b[slow]=b[fast];
                    //             b[fast] = 0;
                    //             fast++;
                    //         }else if(b[slow]!==0 && b[fast]===0){
                    //             fast++;
                    //         }else if(b[slow]!==0 && b[fast]!==0){
                    //             if(b[slow]===b[fast]){
                    //                 b[slow] = b[slow] + b[fast];
                    //                 b[fast] = 0;
                    //                 fast = slow+1;
                    //                 slow++;
                    //             }else{
                    //                 slow++;
                    //                 fast = slow+1;
                    //             }
                    //         }


                    //     }
                    // }
