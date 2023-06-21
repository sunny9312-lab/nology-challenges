const promiseFunction = (n, mode, delay=2500) => {
    return new Promise((resolve, reject) => {
        if ( mode === 'inc') {
            setTimeout(() => resolve(n+1));
        } else if ( mode === 'dec') {
            setTimeout(() => resolve(n - 1));
        } else {
            reject(`Invalid mode: ${mode}`);
          }
      
        , delay);
    };

//martyna
const promiseFunction = (n, mode, delay=2500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( mode === 'inc')    {
                resolve(n++);
            } else if( mode === 'dec') {
                resolve(n--);
            } else 
            reject('invalid input')

        }, delay)
      
    };
//martyna
promiseFunction(-2)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });

    function delayedIncDec(n, mode, delay = 2500) {
        return new Promise((resolve, reject) => {
          if (mode === 'inc') {
            setTimeout(() => resolve(n + 1), delay);
          } else if (mode === 'dec') {
            setTimeout(() => resolve(n - 1), delay);
          } else {
            reject(`Invalid mode: ${mode}`);
          }
        });
      }
      
      // Example usage:
    //   delayedIncDec(5, 'inc', 2000)
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error));

        delayedIncDec(5, 'inc', 1000)
        .then((value) => {
            console.log(value);
        })
        .catch((e) => {
            console.log(e)
        })



      
    //   delayedIncDec(10, 'dec', 3000)
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error));
      
    //   delayedIncDec(7, 'invalidMode', 2500)
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error));
      