import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopTweets } from '../../redux/topTweetsSlice';
import Tweet from '../tweet/Tweet';

const TopTweetsPage = () => {

  const tweets = useSelector(selectTopTweets);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "2em" }}>
      <h2>
        Top Tweets
      </h2>
      {tweets.map((tweet) => 
        <Tweet 
        key={tweet.id}
        id={tweet.id}
        name={tweet.name}
        handle={tweet.handle}
        content={tweet.content}
        likes={tweet.likes}
        />
      )}
    </div>
  )
}

export default TopTweetsPage