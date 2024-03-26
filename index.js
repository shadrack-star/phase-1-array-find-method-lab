// code your solution here

    const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
    ];
   
    superbowlWin = (record) => {
        const result = record.find( record => record.result === "W" );
        //If a win is found, return the year, otherwise return undefined
        return result ? result.year : undefined;
        
      }
    


