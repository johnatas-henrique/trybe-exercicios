const getRepos = require('./exercise4');

it('gets a list of repositories names', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('hacka-trybe');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});
