interface refreshToken {
  refreshToken: (authInfo: any) => Promise<string>;
}

export { refreshToken };
