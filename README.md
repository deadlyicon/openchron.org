# openchron.org


## Development

```sh
git clone git@github.com:deadlyicon/openchron.org.git
cd openchron.org
yarn
createdb openchron-development
createdb openchron-test
knex migrate:latest
```
