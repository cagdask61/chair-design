import { create } from "zustand";

interface FabricTextureStoreModel {
    key: string;
    change: (fabricKey: string) => void;
}

const STORAGE_NAME = "fabric";

const useFabricTextureStore = create<FabricTextureStoreModel>((set) => ({
    key: localStorage.getItem(STORAGE_NAME) ?? '11',
    change: (fabricKey: string) => set(() => {
        localStorage.setItem(STORAGE_NAME, fabricKey);
        return {
            key: fabricKey
        }
    })
}));

export default useFabricTextureStore;