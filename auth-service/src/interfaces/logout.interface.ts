interface logoutInterface {
    logout : (authInfo: any) => Promise<string>;
}

export { logoutInterface };
