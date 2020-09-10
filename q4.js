let criminals = [
    {
        name:"Kalai",
        age:"21",
        country:"India",
        hobbies:["studying","learning","chatting"]
    },
    {
        name:"suresh",
        age:"22",
        country:"Canada",
        hobbies:["sleeping","eating","roaming"]
    },
    {
        name:"chidu",
        age:"22",
        country:"Singapore",
        hobbies:["playing","eating","sleeping"]
    },
    {
        name:"dhana",
        age:"32",
        country:"Australia",
        hobbies:["betraying","killing","cheating"]
    },
]

function displayage(criminals){
    console.log("people wit the age less than 30");

    console.log("__________________________________________________________________________________");
    criminals.forEach(element => {
        if(element.age<30)
        {
            console.log(element);
        }
        
    });

}

function displaycountry(criminals){
    console.log("People with country as india");
    console.log("_____________________________________________________________________________________");
    criminals.forEach(element => {
        if(element.country=="India")
        {
            console.log(element);
        }
        
    });
}

displayage(criminals);
displaycountry(criminals);