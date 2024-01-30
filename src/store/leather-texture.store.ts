import { create } from "zustand";

interface LeatherTextureStoreModel {
    key: string;
    change: (leatherKey: string) => void;
}

const STORAGE_NAME = "leather";

const useLeatherTextureStore = create<LeatherTextureStoreModel>((set) => ({
    key: localStorage.getItem(STORAGE_NAME) ?? 'base',
    change: (leatherKey: string) => set(() => {
        localStorage.setItem(STORAGE_NAME, leatherKey);
        return {
            key: leatherKey
        }
    })
}));

export default useLeatherTextureStore;