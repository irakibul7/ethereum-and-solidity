const bip39 = require('bip39');
const fs = require('fs-extra');

const main = async () => {
  const { czech, italian, french, portuguese, english } =
    bip39.wordlists;
  const wordList =
    czech.toString() +
    french.toString() +
    french.toString() +
    portuguese.toString() +
    english.toString();

  const str = wordList.split(',');
  const sortStrArr = str.sort();
  console.log(sortStrArr);
  fs.writeFileSync('./.word.json', JSON.stringify(sortStrArr));
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
