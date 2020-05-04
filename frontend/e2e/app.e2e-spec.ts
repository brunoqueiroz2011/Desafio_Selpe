import { MVPage } from './app.po';

describe('mv App', function() {
  let page: MVPage;

  beforeEach(() => {
    page = new MVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mv works!');
  });
});
