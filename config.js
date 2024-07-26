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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_17_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJDNHNtUE82MWhZRGNtWnFqQnJJQ1JydE5ORGZjbHdXcjJYNW9zd3NJNzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktYZ1c4eFluU3YybnJaMGZtV0ZGNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTI0M2E5NGMtMWViYi00NDY1LWE5YzUtNzZmMzNjNzY3MTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgNyxcbiAgICAgIDI0MyxcbiAgICAgIDE0NyxcbiAgICAgIDI0NixcbiAgICAgIDE2LFxuICAgICAgMTk2LFxuICAgICAgMTY0LFxuICAgICAgMTU5LFxuICAgICAgMTY0LFxuICAgICAgMTYsXG4gICAgICAyMjksXG4gICAgICAxOSxcbiAgICAgIDIzLFxuICAgICAgMjE0LFxuICAgICAgMTYxLFxuICAgICAgMTMxLFxuICAgICAgMjIsXG4gICAgICAxNTUsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNyxcbiAgICAgIDE4NyxcbiAgICAgIDQ4LFxuICAgICAgNzMsXG4gICAgICAxOTgsXG4gICAgICAxOTgsXG4gICAgICA1NixcbiAgICAgIDIwNixcbiAgICAgIDI0NixcbiAgICAgIDIyNCxcbiAgICAgIDIxNCxcbiAgICAgIDEwNCxcbiAgICAgIDc2LFxuICAgICAgMTc5LFxuICAgICAgNTksXG4gICAgICAyNDcsXG4gICAgICA4NSxcbiAgICAgIDY1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVNTMzNDOUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY5NDkxNzQ3ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjYzNzQ2MDExMzgzNzk6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKamdzdjhDRUtIc2o3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJXc3FUcVFKeCt0Sy8wbGMwTEY1SitwWE9ERXpZWWorNXdoQWdLSVF4SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidS80WXY1RE1ZanNJR3hHUS9pRFMzODd6Z3VKMllqQngvMzFGT2FKUHlQcVY4K3NkYWkvQkZZQmJqeWd1RlVINHloaFlMOVE5TzJ1dnZpL3VoWEZVRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnRoMWlVZkNGMkZrYTRJaWplK0VTNUNLNzFkNlQrU0Fxd0oyc29zU2tJdUM2ZEMydFZJSE9pdzlnZC95SWJTYUxhV1pyWDZIenYrMmZMdVptYm5UaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njk0OTE3NDc4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDIxNDE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWVlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwcVdWaS9TVHhQSXRCSG9xUTJmOHQ3Z3hJRG9mbXVxOCtpaWNzamU4OVA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwNDA0MDcyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAyMTM5MTQ5MVwifSIKfQ=="  // PUT your SESSION_ID 


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
