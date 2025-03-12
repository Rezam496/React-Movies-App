const shortenText = (text) => {
    if (typeof text !== 'undefined' && text !== null) {
        return text.split(" ").slice(0, 3).join(" ");
    } else {
        console.error('The input text is undefined or null.');
        return '';
    }
};
const findId=(text)=>{
    return text.split(":").pop()
}
export{shortenText,findId}