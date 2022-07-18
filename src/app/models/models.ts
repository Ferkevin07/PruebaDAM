export interface UserInfo {
    nombre: string;
    edad: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'Turista' | 'Propietario' | 'Admin';
// eslint-disable-next-line eol-last
}