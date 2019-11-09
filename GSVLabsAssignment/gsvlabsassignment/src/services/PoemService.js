import { http } from './HttpService'

export function getAllPoems() {
    return http().get('api/poem');
}

export function getPoemById(id) {
    return http().get(`api/poem/${id}`);
}

export function createPoem(poem) {
    return http().post('/api/poem', poem);
}

export function deletePoem(id) {
    return http().delete(`api/poem/${id}`);
}

export function updatePoem(poem) {
    return http().put('api/poem', poem);
}
