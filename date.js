let today = new Date();
    let options = {
        weekday: "long" ,
        day: "numeric" ,
        month: "long" 
    }
exports.day = () => today.toLocaleDateString("en-Us" , options) ;
