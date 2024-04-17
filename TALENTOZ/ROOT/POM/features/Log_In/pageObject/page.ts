
export default class Page {
    public open (path: string) {
        return browser.url(process.env.WEB_BASE_URL)
    };
}
