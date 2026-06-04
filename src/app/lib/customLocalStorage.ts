class CustomLocalStorage {
  save(key:string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  read(key: string): string {
    return JSON.parse(JSON.stringify(window.localStorage.getItem(key)));
  }
}

export const storage = new CustomLocalStorage();
