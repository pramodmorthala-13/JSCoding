const myDebounce=(cb,delay)=>{
    let timerId;
    return function(){
        const context=this;
        const args=arguments
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            cb.apply(context, args);
        },delay)
    }
}


const logMessage = (message) => {
    console.log(message);
};

const debouncedLog = myDebounce(logMessage, 500);

debouncedLog('Hello, World!');  
