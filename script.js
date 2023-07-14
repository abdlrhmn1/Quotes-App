function Quotes() {

    var quote = ["“Be the change that you wish to see in the world”",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        ` “So many books, so little time.”`,
        "“Be yourself; everyone else is already taken.”",
        `“A room without books is like a body without a soul.”`,
        `“You only live once, but if you do it right, once is enough.” `,
        `“In three words I can sum up everything I've learned about life: it goes on.”`,
        `“If you tell the truth, you don't have to remember anything.”`
    ]

    var userName = ['--Ghandi', `-- Albert Einstein`, `-- Frank Zappa`, '-- Oscar Wilde', `-- Marcus Tullius Cicero`, `-- Mae West`, `-- Robert Frost`, `-- Mark Twain`]

    var Num = Math.floor(Math.random() * quote.length)

    document.getElementById('quote').innerHTML = quote[Num]
    document.getElementById('quote-name').innerHTML = userName[Num]
}