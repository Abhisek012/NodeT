const EventEmitter = require("events");
const fs = require("fs");

const userEmitter = new EventEmitter();


const eventCount = {
    logoutCount:0,
    loginCount:0,
    purchasedCount:0,
    profileupdateCount:0
    
}

const LogFile = "eventlog.json"

if(fs.existsSync(LogFile)){
   const data = fs.readFileSync(LogFile, "utf-8") // const data = fs.readFileSync("./eventlog.json", "utf-8") we can write this line instead but if we don't define const LogFile = "eventlog.json" 
   Object.assign(eventCount, JSON.parse(data))
}

function saveCount(){
    fs.writeFileSync(LogFile, JSON.stringify(eventCount ,null , 2))
}

//creating events
userEmitter.on("LOGIN" , (username) =>{
    eventCount.loginCount++
    console.log(`${username} logged in successfully✅`);
    saveCount();
})

userEmitter.on("LOGOUT" , (username) =>{ 
    eventCount.logoutCount++
    console.log(`${username} logged out successfully❌`);
    saveCount();

})

userEmitter.on("Purchased" , (username , item) =>{
    eventCount.purchasedCount++
    console.log(`${username} purchased ${item} successfully✅`);
   saveCount()
})


userEmitter.on("Profile_update" , (username , FIELD) =>{
    eventCount.profileupdateCount++
    console.log(`${username} updated  their ${FIELD} profile field. `);
    saveCount()
})

userEmitter.on("Summary", ()=>{
    console.log("\nEvent Summary: ");
    console.log(`Logins: ${eventCount.loginCount}`);
    console.log(`Logout: ${eventCount.logoutCount}`)
    console.log(`Puchased: ${eventCount.purchasedCount}`)
    console.log(`Profile Update: ${eventCount.profileupdateCount}`);
    
    
})


//emit events with different arguments

userEmitter.emit("LOGIN" , 'Abhi')
userEmitter.emit("LOGOUT", 'Abhi')
userEmitter.emit("Purchased", 'Abhi', 'IPhone' )
userEmitter.emit("Profile_update", 'Abhi','Email address')

userEmitter.emit("Summary")


