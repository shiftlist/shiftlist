export default class User {
    public userName: string;
    public isLoggedIn: boolean;
    public token: string;

    constructor(UserName: string, IsLoggedIn: boolean = false, Token: string) {
        this.userName = UserName;
        this.isLoggedIn = IsLoggedIn;
        this.token = Token;
    }

}