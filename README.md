
# Sample Feeds

A website containing sample Atom, RDF, and RSS feeds - [sample-feeds.rowanmanning.com](https://sample-feeds.rowanmanning.com/).


## Table of Contents

  * [Adding new feeds](#adding-new-feeds)
  * [Running locally](#running-locally)
  * [Contributing](#contributing)
  * [License](#license)


## Adding new feeds

To add new feeds you'll need [Node.js](https://nodejs.org/) version 20+, and to clone this repo locally (it's best to first fork this repo and then clone your fork so you have push access). Run the following in this repo to install dependencies:

```bash
npm install
```

### Step 1. Pull in a copy of the feed

To add a new example feed (an academic example, not a real-world feed), then run the following, where `<FEED_URL>` is the full HTTP or HTTPS URL to an Atom or RSS feed:

```bash
node ./scripts/new-example.js <FEED_URL>
```

To add a new real-world feed, then run the following, where `<FEED_URL>` is the full HTTP or HTTPS URL to an Atom or RSS feed:

```bash
node ./scripts/new-real.js <FEED_URL>
```

### Step 2. Update feed data

You should find that a new pair of files have been created in either `content/examples` or `content/real-world` under a directory that's an MD5 hash of the feed URL. Perform the following manual steps to get the feed ready:

  1. Update `index.md` to have a descriptive title. Also optionally add some Markdown below the second `---` to add a sentence describing the feed. See existing feeds for examples of this.

  2. Update `index.md` to have a correct `feedType` property. You should be able to determine the type of feed (`RSS` or `Atom`) based on the created `feed.xml` file.

  3. Update `feed.xml` to anonymise email addresses. RSS feeds often have email addresses as author data, these should be set to `webmaster@example.com` or a similar fake email address.

  4. Update `feed.xml` to make sure that `self` links point to the new feed URL. Search for `rel="self"` within the file and replace the URL found there with `https://sample-feeds.rowanmanning.com/real-world/<YOUR_FEED_MD5_HASH>/feed.xml`. Sometimes this will be a `<link>` element, and sometimes it'll be an `<atom:link>` element.

### Step 3. Commit

Commit your changes on a new branch, push to your fork of this repo, and open a pull request.


## Running locally

  1. Install [Hugo](https://gohugo.io/)

  2. Clone this repo locally:

     ```bash
     git clone https://github.com/rowanmanning/sample-feeds.git && cd sample-feeds
     ```

  3. Run `hugo server`

  4. Visit [http://localhost:1313/](http://localhost:1313/)


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [GPLv3](LICENSE) license.<br/>
Copyright &copy; 2022, Rowan Manning.
