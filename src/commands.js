// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'fb' | 'm' | 'mw' | 'wa' | 'waw' | 'gm' | 'yt' | 'tv' | 'gh' | 'r' | 'l' | 'me' | 'ig' | 't' | 'vs' |
                           'c' | 'cal' | 'p' | 'n' | 'h' | 'pv' | 'gd' | 'wp' | 'wsj' | 'cnn' | 'wiki' | 'g' | 'plex' | 'am' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    m: {
        name: "Messenger Desktop App",
        url: "messenger://",
    },
    mw: {
        name: "Messenger Web",
        url: "https://www.messenger.com/"
    },
    wa: {
        name: "WhatsApp Desktop App",
        url: "whatsapp://",
    },
    waw: {
        name: "WhatsApp Web",
        url: "https://web.whatsapp.com/"
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    t: {
        name: "Threads",
        url: "https://threads.net/",
        searchurl: "https://www.threads.net/search/?q="
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    wp: {
        name: "Washington Post",
        url: "https://www.washingtonpost.com/regional/"
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://www.wsj.com/"
    },
    cnn: {
        name: "CNN",
        url: "https://www.cnn.com/"
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q="
    },
    h: {
        name: "Hulu",
        url: "https://hulu.com/",
    },
    pv: {
        name: "Amazon Prime Video",
        url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
        searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
    },
    ynab: {
        name: "You Need A Budget",
        url: "https://app.ynab.com/" 
    },
    c: {
        name: "Coinbase",
        url: "https://coinbase.com/" 
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    uvacovid: {
        name: "UVA COVID-19 Tracker",
        url: "https://returntogrounds.virginia.edu/covid-tracker"
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    p: {
        name: "Perplexity.ai",
        url: "https://www.perplexity.ai/",
        searchurl: "https://www.perplexity.ai/?q="
    },
    plex: {
        name: "Plex",
        url: "https://app.plex.tv/desktop/#!/"
    },
    am: {
        name: "Amazon",
        url: "https://www.amazon.com/",
        searchurl: "https://www.amazon.com/s?k="
    },
    DEFAULT: {
        name: "Default - ChatGPT",
        url: "https://chatgpt.com/",
        searchurl: "https://chatgpt.com/?q=%s&hints=search"
    }
};
