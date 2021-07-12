
            const quotes = document.getElementById("quotes");
            const author = document.getElementById("author");
            const newQ = document.getElementById("newQ");
            const tweet = document.getElementById("tweetMe");
            let realData = "";
            let quotesData = "";
            const tweetNow = () => {
                let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} by ${quotesData.author}`;
                window.open(tweetPost);
            }
            const getNewQuotes = () => {
                let rnum = Math.floor(Math.random() * 1672);
                quotesData = realData[rnum];
                quotes.innerHTML = `${quotesData.text}`;
                if (quotesData.author === null)
                    author.innerHTML = quotesData.author = "Anonymous";
                else
                    author.innerHTML = `-${quotesData.author}`;
            };
            const getQuotes = async () => {
                const api = "https://type.fit/api/quotes";
                try {
                    let data = await fetch(api);
                    realData = await data.json();
                    getNewQuotes();
                } catch (error) { console.log("Some error has occured.") }
            };
            tweet.addEventListener('click', tweetNow);
            newQ.addEventListener('click', getNewQuotes);
            getQuotes();
