# Genius API Wrapper

Client interface for accessing [Genius API](https://docs.genius.com/).


## Installation

Install via [npm](https://www.npmjs.org/package/genius-wrapi)

```bash
npm install genius-wrapi --save
```

## Usage

Create a client object to connect to Genius API [endpoints](https://docs.genius.com/#resources-h1).

```JS
var geniusWrapi = require('genius-wrapi');

var client = new geniusWrapi(GENIUS_ACCESS_TOKEN);

// Now you are ready to make API calls to Genius.
```

Provide parameters and a callback. 

API calls follow this syntax:

`client.apimethod(param1, ..., queryString, callback);`

* `param` - (*if required*) url parameters - eg: For [annotations.get](#annotations.get) the value for `:id`.
* `queryString` - (*as required*) API method parameters as key-value pairs.

### Examples

#### Get data for a specific annotation.
```JS
client.annotations.get('6737668', function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Creates a new annotation on a public web page.
```JS
var payload = {
  "annotation": {
    "body": {
      "markdown": "hello **world!**"
    }
  },
  "referent": {
    "raw_annotatable_url": "http://seejohncode.com/2014/01/27/vim-commands-piping/",
    "fragment": "execute commands",
    "context_for_display": {
      "before_html": "You may know that you can ",
      "after_html": " from inside of vim, with a vim command:"
    }
  },
  "web_page": {
    "canonical_url": null,
    "og_url": null,
    "title": "Secret of Mana"
  }
};
client.annotations.create(payload, function(err, data) {
  if (!err) {
    console.log(data);
  }	
});
```

#### Songs for the specified artist.
```JS
client.artists.songs('16775', function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Retrieve information about a web page.
```JS
client.webpages.lookup(
  {
    aw_annotatable_url:'https://docs.genius.com'
  }, 
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

#### Search documents hosted on Genius..
```JS
client.search(
  {
    q:'Kendrick Lamar'
  }, 
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);
```

## API Functions

### [Annotations](https://docs.genius.com/#annotations-h2)
* annotations.get
* annotations.create
* annotations.update
* annotations.delete
* annotations.upvote
* annotations.unvote
* annotations.downvote

### [Referents](https://docs.genius.com/#referents-h2)
* referents

### [Songs](https://docs.genius.com/#songs-h2)
* songs

### [Artists](https://docs.genius.com/#artists-h2)
* artists
* artists.songs

### [Web Pages](https://docs.genius.com/#web_pages-h2)
* web_pages.lookup

### [Search](https://docs.genius.com/#search-h2)
* search

### [Account](https://docs.genius.com/#account-h2)
* account

## License

  [MIT](LICENSE)
