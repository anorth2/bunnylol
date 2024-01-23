'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q="},m:{name:"Messenger Desktop App",url:"messenger://"},mw:{name:"Messenger Web",url:"https://www.messenger.com/"},wa:{name:"WhatsApp Desktop App",url:"whatsapp://"},waw:{name:"WhatsApp Web",url:"https://web.whatsapp.com/"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/"},gd:{name:"Google Drive",url:"https://drive.google.com/drive/u/0",searchurl:"https://drive.google.com/drive/u/"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query="},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q="},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q="},l:{name:"Linkedin",url:"https://linkedin.com/"},ig:{name:"Instagram",url:"https://instagram.com/",searchurl:"https://instagram.com/"},t:{name:"Threads",url:"https://threads.net/",searchurl:"https://www.threads.net/search/?q="},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},wp:{name:"Washington Post",url:"https://www.washingtonpost.com/regional/"},wsj:{name:"Wall Street Journal",url:"https://www.wsj.com/"},cnn:{name:"CNN",url:"https://www.cnn.com/"},n:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q="},h:{name:"Hulu",url:"https://hulu.com/"},pv:{name:"Amazon Prime Video",url:"https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",searchurl:"https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="},vs:{name:"VS Code",url:"vscode://"},ynab:{name:"You Need A Budget",url:"https://app.ynab.com/"},c:{name:"Coinbase",url:"https://coinbase.com/"},cal:{name:"Google Calendar",url:"https://calendar.google.com/calendar/r"},uvacovid:{name:"UVA COVID-19 Tracker",url:"https://returntogrounds.virginia.edu/covid-tracker"},wiki:{name:"Wikipedia",url:"https://en.wikipedia.org",searchurl:"https://en.wikipedia.org/wiki/"},p:{name:"Perplexity.ai",url:"https://www.perplexity.ai/",searchurl:"https://www.perplexity.ai/?q="},plex:{name:"Plex",url:"https://app.plex.tv/desktop/#!/"},DEFAULT:{name:"Default - Perplexity.ai",url:"https://www.perplexity.ai/",searchurl:"https://www.perplexity.ai/?q="}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}