const { kebabCase, filter } = require('lodash');
const {
  tokenIdFrom,
  normalizDomainName,
  loadFromDictionary,
  includeWordsByLength,
  ENS,
} = require('./utils');

const main = async () => {
  console.log(tokenIdFrom('rakib.swop.eth'));
  const dictionaryName = process.argv[2];
  if (!dictionaryName) throw 'Unspecified dictionary filename';
  const words = loadFromDictionary(dictionaryName);
  return Promise.all(
    includeWordsByLength(words, { min: 3, max: 11 }).map((word) => {
      return new Promise(async (resolve, _reject) => {
        const domain = kebabCase(normalizDomainName(word));
        const isAvailable = await ENS.availble(tokenIdFrom(domain));
        resolve({ isAvailable, word, domain: `${domain}.eth` });
      });
    })
  );
};

main()
  .then((domain) => {
    console.table(filter(domain, 'isAvailble'));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
