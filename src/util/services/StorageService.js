class StorageService {
  static setItem(key, value) {
    const { storage } = window;
    storage.setItem(key, value);
  }
}

export default StorageService;
