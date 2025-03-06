const shortenText=(text)=>{
    return text.split(" ").slice(0,3).join("")
}
const findId=(text)=>{
    return text.split(":").pop()
}
export{shortenText,findId}