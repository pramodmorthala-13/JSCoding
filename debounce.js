const myDebounce=(cb,delay)=>{
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            cb.apply(this, args);
        },delay)
    }
}

//simple and with => function
const myDebounce=(cb,delay)=>{
    let timerID;
    return (...args)=>{
        if(timerID) clearTimeout(timerID);
        timerID=setTimeout(()=>{
            cb(...args)
        },delay)
    }
}


const logMessage = (message) => {
    console.log(message);
};

const debouncedLog = myDebounce(logMessage, 500);

debouncedLog('Hello, World!');  
