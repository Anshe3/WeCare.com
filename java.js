
const workSection = document.querySelector('#mainbox1');
const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry)
    if (!entry.isIntersecting) return;
    const counterNum = document.querySelectorAll('.counter-numbers');
    const speed = 200;

    counterNum.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.number);
            // console.log(targetNumber)
            const initialNum = parseInt(curElem.innerText);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // console.log(incrementNumber)

            if (initialNum < targetNumber) {
                curElem.innerText = `${initialNum + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            }
        }

        updateNumber();
    });
    observer.unobserve(workSection)
},
    {
        root: null,
        threshold: 0,
    })

workObserver.observe(workSection)




// Number Animation
// const counterNum = document.querySelectorAll('.counter-numbers');
// const speed = 200;

// counterNum.forEach((curElem) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         // console.log(targetNumber)
//         const initialNum = parseInt(curElem.innerText);
//         const incrementNumber = Math.trunc(targetNumber / speed);
//         // console.log(incrementNumber)

//         if (initialNum < targetNumber) {
//             curElem.innerText = `${initialNum + incrementNumber}+`;
//             setTimeout(updateNumber, 10);
//         }
//     }

//     updateNumber();
// })