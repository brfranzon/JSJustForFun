// Write a JavaScript function to parse an URL.

// modern
const url = new URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python');
//console.log(url);


//old school

function parse_URL(url) {

  return {
    source: 'source',
    protocol: 'protocol'
  }

}

console.log(parse_URL(url))