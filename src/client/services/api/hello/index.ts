export default class {
    initApi: any;
    constructor(initApi) {
        this.initApi = initApi;
    }
    getJson = () => this.initApi.get(`https://api.myjson.com/bins/tamus`);
}