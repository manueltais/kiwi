import { MetadataStorage } from '../metadata/metadataStorage';
export function Delete(path: string | RegExp) {
    return function (object: Object, methodName: string) {
        console.log(`${object}`);
    }
}