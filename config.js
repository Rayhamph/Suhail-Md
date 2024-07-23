const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_30_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyVVRMZkViVUxEYXd3VHB2MGZoNGR6d3I4Q3lFUzRhWVZGbWJmRFFyc3FjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4UHpfUjFTVFRkS1FjdjI1NHFudTlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0ZWIxODQ4LWQ4YmUtNGI4Yi04YmE4LTEzMDM3NDdmMmVkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAxMzUsXG4gICAgICAzMyxcbiAgICAgIDIxNyxcbiAgICAgIDUyLFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgMjI5LFxuICAgICAgNzEsXG4gICAgICAxMTUsXG4gICAgICAyMTYsXG4gICAgICAyMzEsXG4gICAgICAyNDgsXG4gICAgICAxMjgsXG4gICAgICA3MyxcbiAgICAgIDY3LFxuICAgICAgMTU3LFxuICAgICAgODksXG4gICAgICAxNjYsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxMDIsXG4gICAgICAxOTQsXG4gICAgICAxMTgsXG4gICAgICAxNTAsXG4gICAgICAxMSxcbiAgICAgIDMyLFxuICAgICAgMjAyLFxuICAgICAgODQsXG4gICAgICA0NCxcbiAgICAgIDE2MCxcbiAgICAgIDEyNyxcbiAgICAgIDU1LFxuICAgICAgMjM1LFxuICAgICAgMTIxLFxuICAgICAgMjMyLFxuICAgICAgMTg0LFxuICAgICAgMTA2LFxuICAgICAgMTYyLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlZYUDhCMjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY5NDkxNzQ3ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjYzNzQ2MDExMzgzNzk6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZmdzdjhDRUtTTS9yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJXc3FUcVFKeCt0Sy8wbGMwTEY1SitwWE9ERXpZWWorNXdoQWdLSVF4SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkJqa2d0bmZoMm1VeDFXNXRPWkVaWFV5b25VaFRoV0lQU1owa1RXTmJoM3FqMFVtdUdFTXlpeDQvci90eXFtSjgyV3hTMitoZk92aTBaWmM1UkU1RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ29ZZVJFV2xNRDhFVnp6NGFTMWhLYnpBbTltRVJvNCt5djNCNGJ0NnBuaitmbjZ1Q0h6KzdtUGtseDBEOWgrNUN6N2N5K2lBSVVmQTNVRUkvODgvZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njk0OTE3NDc4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzMwNjAwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
