import { TechbarPage } from './app.po';

describe('techbar App', () => {
  let page: TechbarPage;

  beforeEach(() => {
    page = new TechbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
